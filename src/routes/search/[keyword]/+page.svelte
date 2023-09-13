<script>
  import MovieCard from '../../../components/MovieCard.svelte';
  import { page } from '$app/stores';

  export let data;
  // console.log(data);
  
  $: currPage = data.page;
  let totalPages = data.total_pages;
  // let totalResults = data.total_results;
  $: searchedMovies = data.results;
  $: searchedMedia = $page.params.keyword;
  let listPagination = []
  
  function renderPagination() {
    for (let i = 1; i <= data.total_pages; i++) {
      listPagination.push(i);
    }
  }
  renderPagination();

  function fetchRes(page) {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchedMedia}&include_adult=false&language=en-US&page=${page}&api_key=02295eae3f494b5f2fa0f6d4188b3a34`, options)
    .then(response => response.json())
    .then(response => searchedMovies = response.results)
    .catch(err => console.error(err));
  }
  function nextPage() {
    currPage++;
    fetchRes(currPage);
  }
  function prevPage() {
    currPage--;
    fetchRes(currPage);
  }
  function paginationItemClick(event) {
    const targetButton = event.target;
    currPage = Number(targetButton.innerText);
    fetchRes(currPage);
  }
</script>

<h2><span>"</span>{searchedMedia}<span>"</span></h2>
{#if (totalPages > 1)}
  <div class="pagination">
    <button class="pagination_dir"
        disabled={currPage === 1? 'disabled': ''} 
        on:click={prevPage}
    >
      Previous
    </button>
    {#each listPagination as item}
      <button class="pagination_item"
          class:active={currPage == item}
          on:click={paginationItemClick}
      >
        {item}
      </button>
    {/each}
    <button class="pagination_dir" 
        disabled={currPage === 4? 'disabled': ''} 
        on:click={nextPage}
    >
      Next
    </button>
  </div>
{/if}
<div class="searched-movies">
  {#if searchedMovies.length < 1}
     <h2 class="no-results">No results found</h2>
  {/if}
  {#each searchedMovies as movie}
    <MovieCard media={movie}/>
  {/each}
</div>
{#if (totalPages > 1)}
  <div class="pagination">
    <button class="pagination_dir"
        disabled={currPage === 1? 'disabled': ''} 
        on:click={prevPage}
    >
      Previous
    </button>
    {#each listPagination as item}
      <button class="pagination_item"
          class:active={currPage == item}
          on:click={paginationItemClick}
      >
        {item}
      </button>
    {/each}
    <button class="pagination_dir" 
        disabled={currPage === 4? 'disabled': ''} 
        on:click={nextPage}
    >
      Next
    </button>
  </div>
{/if}

<style>
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 1rem;
    color: #ffcf57;
    margin-bottom: 25px;
    &.no-results {
      color: #F7ECE1;
      display: grid;
      grid-column-start: 1;
      grid-column-end: 3;
    }
    & > span {
      color: #F7ECE1;
    }
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
  .searched-movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    row-gap: 2rem;
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }
  }
  .pagination {
    margin: 40px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 767px) {
      gap: 12px;
    }
    & button {
      background-color: transparent;
      border: none;
      color: #F7ECE1;
      &:disabled {
        opacity: .5;
      }
      &.pagination_dir {
        @media (max-width: 767px) {
          display: none;
        }
      }
      &.pagination_item {
        font-size: 1.3rem;
        background-color: #F7ECE1;
        color: #725AC1;
        border-radius: 7px;
        padding: 5px 10px;
        transition: color .3s;
        @media (max-width: 767px) {
          font-size: 1rem;
        }
        &:not(:nth-child(-n+5)) {
          display: none;
        }
        &.active, &:hover {
          background-color: #725AC1;
          color: #F7ECE1;
        }
        &.active {
          pointer-events: none;
        }
      }
    }
  }
</style>