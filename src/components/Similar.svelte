<script>
  import MovieCard from "./MovieCard.svelte";

  export let media
  // console.log(media);
</script>

<h3>Similar Movies / TV Shows</h3>
<div class="similar-container">
  {#each media as movie}
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
    & > .movie-card:not(:nth-child(-n+8)) {
      display: none;
    }
    & .movie-card {
      max-width: 100px;
    }
  }
</style>