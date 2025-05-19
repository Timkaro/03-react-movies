import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import type { Movie } from "../types/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.results;
}
