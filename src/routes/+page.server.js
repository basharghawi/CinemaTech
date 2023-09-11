// export async function load({ fetch }) {  // SSR
//   const options = {method: 'GET', headers: {accept: 'application/json'}};
//   const res = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=02295eae3f494b5f2fa0f6d4188b3a34&page=1', options);
//   const data = await res.json();
//   if (res.ok) {
//     return data
//   }
// }
export const load = async ({ fetch }) => {  // SSR
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const [movie, tv] = await Promise.all([
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=02295eae3f494b5f2fa0f6d4188b3a34&page=1', options),
    fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=02295eae3f494b5f2fa0f6d4188b3a34', options)
  ])
  const moviesData = await movie.json();
  const tvData = await tv.json();
  // console.log(moviesData);
  // console.log(tvData);
  return {
    movies : moviesData,
    tvShows : tvData
  }
}