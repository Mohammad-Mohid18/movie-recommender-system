# 🎬 Movie Recommender System (Full Stack + Firebase)

A full-stack **Movie Recommender Web Application** that provides personalized movie suggestions using Machine Learning and allows users to manage their accounts, watchlists, and preferences.

---

## 🚀 Features

* 🔍 Movie Recommendation System (Content-Based Filtering)
* 👤 User Authentication (Login / Signup)
* ❤️ Watchlist Management
* 📊 Personalized Recommendations
* 🌐 Responsive & Modern UI
* ☁️ Firebase Integration (Backend as a Service)

---

## 🧠 Machine Learning Model

* Content-Based Recommendation System
* Uses:

  * Cosine Similarity
  * TF-IDF Vectorization
* Dataset: Netflix Movies & TV Shows Dataset

---

## 🛠️ Tech Stack

### 💻 Frontend

* HTML
* CSS
* JavaScript

### ⚙️ Backend

* Python (Flask)

### 🧠 ML Libraries

* Pandas
* NumPy
* Scikit-learn

### ☁️ Backend Services

* Firebase Firestore (Database)
* Firebase Authentication

---

## 📂 Project Structure

```
movie-recommender-system/
│
├── data/
│   ├── netflix_cleaned.csv
│   ├── netflix_features.csv
│   └── netflix_titles.csv
│
├── models/
│   ├── netflix_data.pkl
│   └── similarity.pkl
│
├── notebook/
│   ├── data_cleaning.ipynb
│   ├── feature_engneering.ipynb
│   └── vectorization.ipynb
│
├── src/
│   ├── __init__.py
│   └── recomendation_function.py
│
├── static/
│   ├── css/
│   │   ├── auth.css
│   │   ├── style.css
│   │   └── watchlist.css
│   │
│   ├── images/
│   │   ├── FirebaseStoring.png
│   │   ├── Login-Signup.png
│   │   ├── Main.png
│   │   └── Watchlist.png
│   │
│   └── js/
│       ├── app.js
│       ├── auth.js
│       └── firebase.js
│
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   └── watchlist.html
│
├── app.py
├── requirements.txt
└── README.md
```

---

### 📌 Notes

* `models/similarity.pkl` is generated using `vectorization.ipynb`
* `venv/` is excluded from the repository via `.gitignore`
* `__pycache__/` is automatically generated and not included


```

---

## 🔥 Firebase Integration

* User Authentication (Email/Password)
* Firestore Database:

  * Stores user data
  * Stores watchlist
  * Stores interactions

---

## ▶️ How to Run Locally

## ⚠️ Note About Model File

The similarity.pkl file is not included in this repository due to GitHub file size limits.

To generate it, run:

### 1. Clone Repository

```bash
git clone https://github.com/Mohammad-Mohid18/movie-recommender-system.git
cd movie-recommender-system
```

### 2. Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate   # Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create Model
⚙️ Steps to Generate similarity.pkl
Navigate to the notebook:

vectorization.ipynb
Run all cells in the notebook.


### 5. Run Application

```bash
python app.py
```

---

## 🔐 Environment Setup

Create `.env` file and add:

```
FIREBASE_API_KEY=your_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
```

---

## 📊 Key Functionalities

* Search any movie
* Get top N similar movies
* Add/remove movies from watchlist
* Secure login system
* Real-time data storage using Firebase

---

## 💡 Future Improvements

* 🎯 Hybrid Recommendation System
* 📱 Mobile App Version
* 🎥 Trailer Integration (YouTube API)
* ⭐ User Ratings System

---

## 🧑‍💻 Author

**Mohammad Mohid**

---

## 🌟 Show Your Support

If you like this project:

* ⭐ Star this repository
* 🍴 Fork it
* 📢 Share it

---

## 📌 Conclusion

This project demonstrates:

* Full-stack development
* Machine learning integration
* Firebase backend usage
* Real-world application design

---
