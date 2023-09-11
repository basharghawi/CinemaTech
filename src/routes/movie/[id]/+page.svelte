<script>
  export let data;
  console.log(data);
  import backdropImage from '../../../images/empty-backdrop.jpg';
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.overview} />
</svelte:head>

<div class="movie-detail">
  <div class="img-container">
    {#if data.backdrop_path != null}
        <img src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path} alt={data.title} title={data.title} />
    {:else}
        <img src={backdropImage} alt="empty poster" title={data.title} />
    {/if}
    <!-- <img src={'https://image.tmdb.org/t/p/original' + data.backdrop_path} alt={data.title} title={data.title}> -->
  </div>
  <div class="title">
    <h1>{data.title}</h1>
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
    <span>Release Date: {data.release_date}</span>
    <br>
    <span>Rating: {Number.parseFloat(data.vote_average).toFixed(1)}</span>
    <br>
    <span>Runtime: {data.runtime} min</span>
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
  .tagline {
    font-style: italic;
    opacity: .7;
  }
  /* img {
    border-radius: 20px;
  } */
  .movie-detail {
    margin: 2rem 20%;
    @media (max-width: 967px) {
      margin: 1rem 3%;
    }
  }
</style>