<script>
  import { goto } from '$app/navigation';

  let inputValue = "";
  function searchFun() {
    goto('/search/' + inputValue);
  }
</script>

<form on:submit|preventDefault={searchFun} class="search">
  <input bind:value={inputValue} 
    type="text" name="search_movie" id="search" placeholder="Search Movie" required
  />
  <button>Search</button>
</form>

<style>
  form {
    position: relative;
    width: 30%;
    padding: 0 1rem;
    margin: 0 auto 50px;
    @media (max-width: 967px) {
      width: 90%;
    }
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 0 10px 10px;
    background-color: #CAC4CE;
    /* color: ; */
    &::placeholder {
      font-size: 14px;
    }
  }
  input:focus ~ button {
    display: none;
  }
  button {
    font-size: .8rem;
    padding: 0rem 1rem;
    background-color: #725AC1;
    color: #CAC4CE;
    border: none;
    position: absolute;
    right: 5px;
    top: 0;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>