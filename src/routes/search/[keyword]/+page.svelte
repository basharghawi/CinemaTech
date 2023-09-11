<script>
  import MovieCard from '../../../components/MovieCard.svelte';

  export let data;
  const searchedMovies = data.results;
</script>

<h2>Search</h2>
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