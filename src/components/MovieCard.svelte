<script>
  import posterImage from '../images/empty-poster.jpg'

  export let media
  $: media_type = media.media_type;
  $: first_air_date = media.first_air_date;
</script>

{#if media_type === 'movie' || first_air_date === undefined}
  <div class="movie-card">
    <a href={'/movie/' + media.id}>
      {#if media.poster_path}
        <img src={'https://image.tmdb.org/t/p/w500' + media.poster_path} alt={media.title} title={media.title} />
      {:else}
        <img src={posterImage} alt="empty poster" title={media.title} />
      {/if}
    </a>
    <h3>{media.title}</h3>
    <p>
      {Number.parseFloat(media.vote_average).toFixed(1)} / 10
    </p>
  </div>
{:else}
  <div class="movie-card">
    <a href={'/tv/' + media.id}>
      {#if media.poster_path}
        <img src={'https://image.tmdb.org/t/p/w500' + media.poster_path} alt={media.name} title={media.name} />
      {:else}
        <img src={posterImage} alt="empty poster" title={media.name} />
      {/if}
    </a>
    <h3>{media.name}</h3>
    <p>
      {Number.parseFloat(media.vote_average).toFixed(1)} / 10
    </p>
  </div>
{/if}

<style>
  .movie-card {
    padding: 1rem;
    & img {
      border-radius: 15px;
      margin-bottom: 15px;
    }
    & h3 {
      font-size: 0.9rem;
      font-weight: 500;
      color: #F7ECE1;
      margin-bottom: 10px;
      height: 42px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (max-width: 967px) {
        font-size: .7rem;
        height: 34px;
      }
    }
    & p {
      font-size: 0.7rem;
      /* color: #F7ECE1; */
      color: #ffcf57;
      font-weight: bold;
      background-color: #725AC1;
      padding: 4px 7px;
      width: fit-content;
      border-radius: 7px;
      @media (max-width: 967px) {
        font-size: .5rem;
      }
    }
  }
</style>