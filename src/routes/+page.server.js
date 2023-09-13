import { TMDB_API_KEY } from '$env/static/private'
export const load = async () => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const fetchMovies = async () => {
    const moviesData = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&page=1`, options);
    const movies = await moviesData.json();
    return movies;
  }
  const fetchTv = async () => {
    const tvData = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${TMDB_API_KEY}`, options);
    const tvShows = await tvData.json();
    return tvShows;
  }

  return {
    movies : fetchMovies(),
    tvShows : fetchTv()
  }
}