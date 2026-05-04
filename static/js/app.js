console.log("APP JS LOADED");

// ─── Save Search ────────────────────────────────────────────────────────────

function saveSearch(movieName) {
    const user = auth.currentUser;
    if (!user || !movieName) return;

    db.collection("users")
      .doc(user.uid)
      .collection("searches")
      .add({
          movie: movieName,
          time: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => console.log("Search saved:", movieName))
      .catch(err => console.error("Error saving search:", err));
}

// Wire up the search form so every search is saved to Firestore
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[method='POST']");
    if (form) {
        form.addEventListener("submit", function () {
            const input = form.querySelector("input[name='movie']");
            if (input && input.value.trim()) {
                saveSearch(input.value.trim());
            }
        });
    }
});


// ─── Add to Watchlist ────────────────────────────────────────────────────────

window.addToWatchlist = function (movieTitle) {
    const user = auth.currentUser;

    if (!user) {
        alert("Please log in to add movies to your watchlist.");
        window.location.href = "/login";
        return;
    }

    // Check for duplicates first
    db.collection("users")
      .doc(user.uid)
      .collection("watchlist")
      .where("title", "==", movieTitle)
      .get()
      .then(snapshot => {
          if (!snapshot.empty) {
              alert(`"${movieTitle}" is already in your watchlist!`);
              return;
          }

          return db.collection("users")
                   .doc(user.uid)
                   .collection("watchlist")
                   .add({
                       title: movieTitle,
                       time: firebase.firestore.FieldValue.serverTimestamp()
                   });
      })
      .then(docRef => {
          if (docRef) {
              console.log("Added to Firestore watchlist, doc id:", docRef.id);
              alert(`✅ "${movieTitle}" added to your watchlist!`);
          }
      })
      .catch(err => {
          console.error("Watchlist error:", err);
          alert("Error: " + err.message);
      });
};


// ─── Remove from Watchlist ───────────────────────────────────────────────────

window.removeFromWatchlist = function (docId) {
    const user = auth.currentUser;
    if (!user) return;

    db.collection("users")
      .doc(user.uid)
      .collection("watchlist")
      .doc(docId)
      .delete()
      .then(() => {
          const elem = document.getElementById("wl-item-" + docId);
          if (elem) {
              elem.style.opacity = "0";
              elem.style.transform = "translateX(30px)";
              setTimeout(() => elem.remove(), 300);
          }
          console.log("Removed from watchlist:", docId);
      })
      .catch(err => alert("Error removing: " + err.message));
};


// ─── Load Watchlist ──────────────────────────────────────────────────────────

function loadWatchlist() {
    const user = auth.currentUser;
    if (!user) return;

    const container = document.getElementById("watchlistContainer");
    if (!container) return;   // Only runs on the watchlist page

    container.innerHTML = `<p class="loading-msg">Loading your watchlist…</p>`;

    db.collection("users")
      .doc(user.uid)
      .collection("watchlist")
      .orderBy("time", "desc")
      .get()
      .then(snapshot => {
          container.innerHTML = "";

          if (snapshot.empty) {
              container.innerHTML = `
                  <div class="empty-watchlist">
                      <p>🎬 Your watchlist is empty.</p>
                      <a href="/" class="browse-link">Browse movies to add</a>
                  </div>`;
              return;
          }

          snapshot.forEach(doc => {
              const movie = doc.data();
              const item  = document.createElement("div");
              item.className   = "watchlist-item";
              item.id          = "wl-item-" + doc.id;
              item.style.transition = "opacity 0.3s, transform 0.3s";
              item.innerHTML = `
                  <span class="wl-title">🎬 ${movie.title}</span>
                  <button class="wl-remove-btn" onclick="removeFromWatchlist('${doc.id}')">Remove</button>
              `;
              container.appendChild(item);
          });
      })
      .catch(err => {
          container.innerHTML = `<p class="error-msg">Error loading watchlist: ${err.message}</p>`;
          console.error(err);
      });
}


// Trigger watchlist load when user is confirmed logged in
auth.onAuthStateChanged(user => {
    if (user) {
        loadWatchlist();
    }
});
