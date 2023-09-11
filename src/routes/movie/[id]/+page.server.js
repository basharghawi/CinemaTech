export async function load({ fetch, params }) {  // SSR
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const [movie, similar] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options),
    fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options)
  ])
  const movieData = await movie.json();
  const similarData = await similar.json();
  return {
    movie : movieData,
    similar : similarData
  }
}