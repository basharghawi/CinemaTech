<script>
  import { fly } from 'svelte/transition';
  import Search from "../components/Search.svelte";
  import Trending from "../components/Trending.svelte";
  
  export let data;
  let movies = data.movies.results;
  let tvShows = data.tvShows.results;
  // let press = data.pressR;
  // console.log(press);
</script>

<svelte:head>
  <title>CinemaTech</title>
  <meta name="description" content="Movies App built with Svelte">
</svelte:head>

<section class="movies" transition:fly={{ duration: 300, y: 100 }}>
  <Search />
  <Trending media={movies} />
</section>

<section class="tv" transition:fly={{ duration: 300, y: 100 }}>
  <Trending media={tvShows} />
</section>

<style>
  .tv {
    margin: 60px 0;
  }
</style>