import axios from "axios";

const API_KEY = "9cda16d98a6e510af2decf0d66e8e7d5";

const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_URL = `${BASE_URL}/movie`;
const SEARCH_URL = `${BASE_URL}/search/movie`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${MOVIE_URL}/popular?language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${SEARCH_URL}?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
      query
    )}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMoviesDetails = async (movieId) => {
  const response = await axios.get(
    `${MOVIE_URL}/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesCast = async (movieId) => {
  const response = await axios.get(
    `${MOVIE_URL}/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const fetchMoviesReviews = async (movieId) => {
  const response = await axios.get(
    `${MOVIE_URL}/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data.results;
};
