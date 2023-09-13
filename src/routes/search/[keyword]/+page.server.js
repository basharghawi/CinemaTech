import { TMDB_API_KEY } from '$env/static/private'
export async function load({ params }) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const fetchRes = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${params.keyword}&include_adult=false&language=en-US&page=1&api_key=${TMDB_API_KEY}`, options);
    const data = await res.json();
    return data;
  }
  
  return fetchRes();
}