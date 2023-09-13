export async function load({params}) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const fetchTv = async () => {
    const tvData = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const tvShow = await tvData.json();
    return tvShow;
  }

  const fetchSimilar = async () => {
    const similarData = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar?language=en-US&page=1&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const similarShows = await similarData.json();
    return similarShows;
  }

  return {
    tv: fetchTv(),
    similar: fetchSimilar()
  }
}