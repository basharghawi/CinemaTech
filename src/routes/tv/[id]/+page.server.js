// export async function load({ fetch, params }) {  // SSR
//   const options = {method: 'GET', headers: {accept: 'application/json'}};
//   const res = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options);
//   const data = await res.json();
//   if (res.ok) {
//     return data
//   }
// }

export async function load({ fetch, params }) {  // SSR
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const [tv, similar] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options),
    fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar?language=en-US&page=1&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options)
  ])
  const movieData = await tv.json();
  const similarData = await similar.json();
  return {
    tv : movieData,
    similar : similarData
  }
}