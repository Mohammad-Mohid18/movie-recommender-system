// Pages that require the user to be logged in
const PROTECTED_PAGES = ['/', '/watchlist'];

auth.onAuthStateChanged(user => {
    const currentPath = window.location.pathname;

    if (user) {
        console.log("Logged in:", user.email);

        const userBox = document.getElementById("userBox");
        if (userBox) {
            userBox.innerHTML = `
                <span class="user-email">👤 ${user.email}</span>
                <button class="logout-btn" onclick="logout()">Logout</button>
            `;
        }

    } else {
        console.log("No user logged in");

        // Redirect to login if trying to access a protected page
        if (PROTECTED_PAGES.includes(currentPath)) {
            window.location.href = "/login";
        }
    }
});


window.signup = function () {
    const email    = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Redirect straight to main app after signup
            window.location.href = "/";
        })
        .catch(error => alert(error.message));
};


window.login = function () {
    const email    = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "/";
        })
        .catch(error => alert(error.message));
};


function logout() {
    auth.signOut().then(() => {
        window.location.href = "/login";
    });
}
