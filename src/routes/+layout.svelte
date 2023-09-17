<script>
  import '../css/normalize.css'
  import '../css/global.css'
  import Nav from '../components/Nav.svelte';
</script>

<Nav />
<main>
  <slot />
</main>
<h5>
  Bashar Alghawi ~ 
  <a href="mailto:b.alghawi21@gmail.com">b.alghawi21@gmail.com</a> ~ 
  CinemaTech
</h5>
<style>
  a {
    color: aliceblue;
  }
  h5 {
    font-size: 14px;
    color: aliceblue;
    text-align: center;
    margin-bottom: 20px;
  }
</style>