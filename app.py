from flask import Flask, render_template, request
import pandas as pd
import pickle

from src.recomendation_function import recommend

app = Flask(__name__)

# Load data
df = pd.read_csv("data/netflix_features.csv")

with open("models/similarity.pkl", "rb") as f:
    similarity = pickle.load(f)


# HOME PAGE
@app.route("/", methods=["GET", "POST"])
def home():

    recommendations = []
    movie_name = ""

    if request.method == "POST":
        movie_name = request.form["movie"]
        recommendations = recommend(movie_name, df, similarity)

    return render_template(
        "index.html",
        recommendations=recommendations,
        movie_name=movie_name
    )


# LOGIN PAGE
@app.route("/login")
def login_page():
    return render_template("login.html")


# SIGNUP PAGE
@app.route("/signup")
def signup_page():
    return render_template("signup.html")


# WATCHLIST PAGE
@app.route("/watchlist")
def watchlist_page():
    return render_template("watchlist.html")


if __name__ == "__main__":
    app.run(debug=True)