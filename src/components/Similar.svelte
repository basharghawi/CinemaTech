<script>
  import MovieCard from "./MovieCard.svelte";

  export let media
  let mediaSliced = media.slice(0,10);
</script>

<h3>Similar Movies / TV Shows</h3>
<div class="similar-container">
  {#each mediaSliced as movie}
    <MovieCard media={movie} />
  {/each}
</div>


<style>
  h3 {
    font-size: 2rem;
    margin-top: 20px;
    @media (max-width: 967px) {
      font-size: 1rem;
    }
  }
  .similar-container {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-wrap: wrap;
    & .movie-card {
      max-width: 100px;
    }
  }
</style>