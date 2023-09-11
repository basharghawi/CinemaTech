<script>
  import MovieCard from "./MovieCard.svelte";

  export let media;
  let media_type = media[0].media_type;
</script>

{#if media_type === 'movie'}
  <h2>Trending Movies</h2>
{:else}
  <h2>Trending TV Shows</h2>
{/if}
<div class="trending">
  {#each media as mediaItem}
    <MovieCard media={mediaItem}/>
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
  .trending {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    row-gap: 2rem;
    @media (max-width: 967px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
</style>