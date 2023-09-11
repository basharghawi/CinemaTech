export async function load({ fetch, params }) {  // SSR
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
  const data = await res.json();
  if (res.ok) {
    return data
  }
}