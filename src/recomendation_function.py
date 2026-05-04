def recommend(movie_name, df, similarity):
    # Step 1: check if movie exists
    if movie_name not in df['title'].values:
        return "Movie not found in dataset"

    # Step 2: get index of the movie
    movie_index = df[df['title'] == movie_name].index[0]

    # Step 3: get similarity scores for that movie
    distances = similarity[movie_index]

    # Step 4: pair each movie with its similarity score
    movie_list = list(enumerate(distances))

    # Step 5: sort movies based on similarity score (high to low)
    sorted_movies = sorted(movie_list, key=lambda x: x[1], reverse=True)

    # Step 6: remove the first item (same movie itself)
    sorted_movies = sorted_movies[1:6]

    # Step 7: get movie titles
    recommendations = []
    for i in sorted_movies:
        recommendations.append(df.iloc[i[0]].title)

    return recommendations