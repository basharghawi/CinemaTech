export async function load({ params }) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const fetchRes = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${params.keyword}&include_adult=false&language=en-US&page=1&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
    const data = await res.json();
    return data;
  }
  
  return fetchRes();
}