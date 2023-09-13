export async function load()  {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const fetchMovies = async () => {
    const moviesData = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=02295eae3f494b5f2fa0f6d4188b3a34&page=1`, options);
    const movies = await moviesData.json();
    return movies;
  }
  const fetchTv = async () => {
    const tvData = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const tvShows = await tvData.json();
    return tvShows;
  }

  return {
    movies : fetchMovies(),
    tvShows : fetchTv()
  }
}