<script>
  export let data;
  import backdropImage from '../../../images/empty-backdrop.jpg';
</script>

<svelte:head>
  <title>{data.name}</title>
  <meta name="description" content={data.overview} />
</svelte:head>

<div class="tv-detail">
  <div class="img-container">
    {#if data.backdrop_path != null}
        <img src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path} alt={data.title} title={data.title} />
    {:else}
        <img src={backdropImage} alt="empty poster" title={data.title} />
    {/if}
    <!-- <img src={'https://image.tmdb.org/t/p/original' + data.backdrop_path} alt={data.name} title={data.name}> -->
  </div>
  <div class="title">
    <h1>{data.name}</h1>
    <div class="geners">
      {#each data.genres as genre}
        <span class="genres_item">{genre.name}</span>
      {/each}
    </div>
  </div>
  {#if data.tagline !== ''}
    <p class="tagline">{data.tagline}</p>
  {/if}
  <p class="overview">{data.overview}</p>
  <p>
    <span>First air date: {data.first_air_date}</span>
    <br>
    <span>Rating: {Number.parseFloat(data.vote_average).toFixed(1)}</span>
    <br>
    <span>Seasons: {data.number_of_seasons}</span>
    <br>
    <span>Episodes: {data.number_of_episodes}</span>
  </p>
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
  img {
    border-radius: 20px;
  }
  .tv-detail {
    margin: 2rem 20%;
    @media (max-width: 967px) {
      margin: 1rem 3%;
    }
  }
</style>