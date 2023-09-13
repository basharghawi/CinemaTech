<script>
  import Similar from '../../../components/Similar.svelte';
  import backdropImage from '../../../images/empty-backdrop.jpg';

  export let data;
  $: tv = data.tv
  $: similar = data.similar.results;
  // console.log(data);
</script>

<svelte:head>
  <title>{tv.name}</title>
  <meta name="description" content={tv.overview} />
</svelte:head>

<div class="tv-detail">
  <div class="img-container">
    {#if tv.backdrop_path != null}
        <img src={'https://image.tmdb.org/t/p/original' + tv.backdrop_path} alt={tv.name} title={tv.name} />
    {:else}
        <img src={backdropImage} alt="empty poster" title={tv.name} />
    {/if}
  </div>
  <div class="title">
    <h1>{tv.name}</h1>
    <div class="geners">
      {#each tv.genres as genre}
        <span class="genres_item">{genre.name}</span>
      {/each}
    </div>
  </div>
  {#if tv.tagline !== ''}
    <p class="tagline">"{tv.tagline}"</p>
  {/if}
  <p class="overview">{tv.overview}</p>
  <p>
    <span>First air date: {tv.first_air_date}</span>
    <br>
    <span>Rating: {Number.parseFloat(tv.vote_average).toFixed(1)}</span>
    <br>
    <span>Seasons: {tv.number_of_seasons}</span>
    <br>
    <span>Episodes: {tv.number_of_episodes}</span>
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
  .tagline {
    font-style: italic;
    opacity: .7;
  }
  p {
    padding: 1rem 0rem;
    @media (max-width: 967px) {
      font-size: 12px;
    }
  }
  img {
    border-radius: 20px;
  }
  .tv-detail {
    margin: 2rem auto;
    max-width: 864px;
    @media (max-width: 967px) {
      margin: 1rem 3%;
    }
  }
</style>