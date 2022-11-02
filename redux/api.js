import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const API_EP = `http://www.omdbapi.com/?apikey=${publicRuntimeConfig.apikey}`;

export const fetchMovies = async (movieName) =>
  axios.get(`${API_EP}&s=${movieName}`);

export const fetchMovie = async (movieId) =>
  axios.get(`${API_EP}&i=${movieId}`);
