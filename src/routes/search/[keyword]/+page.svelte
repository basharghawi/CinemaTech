<script>
  import MovieCard from '../../../components/MovieCard.svelte';
  import { page } from '$app/stores';

  export let data;
  $: searchedMovies = data.results;
  $: searchedMedia = $page.params.keyword;
</script>

<h2>"{searchedMedia}"</h2>
<div class="searched-movies">
  {#each searchedMovies as movie}
    <MovieCard media={movie}/>
  {/each}
</div>

<style>
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 1rem;
    color: #F7ECE1;
    margin-bottom: 25px;
  }
  .searched-movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    row-gap: 2rem;
  }
</style>