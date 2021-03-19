export const findMovieByTitle = (title) =>
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
        .then(response => response.json())

export const findMovieById = (imdbID) =>
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
        .then(response => response.json())

export default {
    findMovieByTitle,
    findMovieById
}