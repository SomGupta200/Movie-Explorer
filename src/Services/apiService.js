import Axios from "axios";

let API_KEY = import.meta.env.VITE_TMDB_API_KEY;
let BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;


// Trending Movies
export const getTrendingMovies = async () => {
  try {
    const res = await Axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,);     
     return res.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};