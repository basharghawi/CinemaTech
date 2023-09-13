export async function load({ params }) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const fetchMovie = async() => {
    const movieData = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const movie = await movieData.json();
    return movie;
  }

  const fetchSimilar = async() => {
    const similarData = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const similar = await similarData.json();
    return similar;
  }

  return {
    movie: fetchMovie(),
    similar: fetchSimilar()
  }
}