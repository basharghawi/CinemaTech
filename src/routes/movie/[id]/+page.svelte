<script>
  import Similar from '../../../components/Similar.svelte';
  import backdropImage from '../../../images/empty-backdrop.jpg';

  export let data;
  $: movie = data.movie
  $: similar = data.similar.results;
</script>

<svelte:head>
  <title>{movie.title}</title>
  <meta name="description" content={movie.overview} />
</svelte:head>

<div class="movie-detail">
  <div class="img-container">
    {#if movie.backdrop_path != null}
        <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} alt={movie.title} title={movie.title} />
    {:else}
        <img src={backdropImage} alt="empty poster" title={movie.title} />
    {/if}
  </div>
  <div class="title">
    <h1>{movie.title}</h1>
    <div class="geners">
      {#each movie.genres as genre}
        <span class="genres_item">{genre.name}</span>
      {/each}
    </div>
  </div>
  {#if movie.tagline !== ''}
    <p class="tagline">"{movie.tagline}"</p>
  {/if}
  <p class="overview">{movie.overview}</p>
  <p>
    <span>Release Date: {movie.release_date}</span>
    <br>
    <span>Rating: {Number.parseFloat(movie.vote_average).toFixed(1)}</span>
    <br>
    <span>Runtime: {movie.runtime} min</span>
  </p>
  <Similar media={similar}/>
</div>


<style>
  * {
    color: #F7ECE1;
  }
  .title {
    margin: 1.7rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 15px;
    align-items: center;
    & > h1 {
      font-size: 2.5rem;
      font-weight: 500;
      @media (max-width: 967px) {
        font-size: 1rem;
      }
    }
  }
  .geners {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    row-gap: 10px;
    @media (max-width: 967px) {
      gap: 7px;
      row-gap: 7px;
    }
  }
  .genres_item {
    font-size: 11px;
    font-weight: normal;
    padding: 4px 7px;
    border-radius: 10px;
    background-color: #725AC1;
    cursor: pointer;
    @media (max-width: 967px) {
      font-size: 8px;
    }
  }
  p {
    padding: 1rem 0rem;
    @media (max-width: 967px) {
      font-size: 12px;
    }
  }
  .tagline {
    font-style: italic;
    opacity: .7;
  }
  img {
    border-radius: 20px;
  }
  .movie-detail {
    margin: 2rem auto;
    max-width: 864px;
    @media (max-width: 967px) {
      margin: 1rem 3%;
    }
  }
</style>