import { TMDB_API_KEY } from '$env/static/private'
export async function load({params}) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const fetchTv = async () => {
    const tvData = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${TMDB_API_KEY}`, options);
    const tvShow = await tvData.json();
    return tvShow;
  }

  const fetchSimilar = async () => {
    const similarData = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar?language=en-US&page=1&api_key=${TMDB_API_KEY}`, options);
    const similarShows = await similarData.json();
    return similarShows;
  }

  return {
    tv: fetchTv(),
    similar: fetchSimilar()
  }
}