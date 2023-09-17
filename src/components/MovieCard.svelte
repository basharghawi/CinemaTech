<script>
  import posterImage from '../images/empty-poster.jpg'

  export let media
  // console.log(media);
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
      <div class="card_wrapper">
        <div class="card_box card__box--a">
          <span>Rating</span>
          <span>{Number.parseFloat(media.vote_average).toFixed(1)}</span>
        </div>
        <div class="card_box card__box--b">
          <span>Released</span>
          <span>{media.release_date.substring(0,4)}</span>
        </div>
      </div>
    </a>
    <h3>{media.title}</h3>
  </div>
{:else}
  <div class="movie-card">
    <a href={'/tv/' + media.id}>
      {#if media.poster_path}
        <img src={'https://image.tmdb.org/t/p/w500' + media.poster_path} alt={media.name} title={media.name} />
      {:else}
        <img src={posterImage} alt="empty poster" title={media.name} />
      {/if}
      <div class="card_wrapper">
        <div class="card_box card__box--a">
          <span>Rating</span>
          <span>{Number.parseFloat(media.vote_average).toFixed(1)}</span>
        </div>
        <div class="card_box card__box--b">
          <span>Released</span>
          <span>{media.first_air_date.substring(0,4)}</span>
        </div>
      </div>
    </a>
    <h3>{media.name}</h3>
  </div>
{/if}

<style>
  .movie-card {
    padding: 1rem;
    & a {
      display: block;
      position: relative;
      overflow: hidden;
      &:hover {
        & .card_box {
          opacity: 1;
          &.card__box--a, &.card__box--b {
            transform: none;
          }
        }
        & img {
          scale: 90%;
          filter: brightness(70%) saturate(80%);
        }
      }
      & .card_wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        position: absolute;
        bottom: 15px;
        right: 0;
        left: 0;
        @media (max-width: 967px) {
          display: none;
        }
      }
      & .card_box {
        opacity: 0;
        z-index: 2;
        padding: 1rem;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        transition: all .3s;
        color: #F7ECE1;
        font-weight: bold;
        &.card__box--a {
          left: 0;
          bottom: 15px;
          transform: translate(-100px, 60px);
          clip-path: polygon(0 20px,20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%);
          transition: all .3s;
        }
        &.card__box--b {
          right: 0;
          bottom: 15px;
          transform: translate(80px, 70px);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all .3s;
        }
      }
    }
    & img {
      border-radius: 15px;
      margin-bottom: 15px;
      transition: all .3s;
    }
    & a:hover ~ h3 {
      color: #ffcf57;
    }
    & h3 {
      font-size: 0.9rem;
      font-weight: 500;
      color: #F7ECE1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color .3s;
      @media (max-width: 967px) {
        font-size: .7rem;
      }
    }
  }
</style>