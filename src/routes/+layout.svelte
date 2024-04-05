<script>
  import '../css/normalize.css'
  import '../css/global.css'
  import Nav from '../components/Nav.svelte';
</script>

<Nav />
<main>
  <slot />
</main>
<p class="footer-end">
  Bashar Alghawi ~ 
  <a href="mailto:b.alghawi21@gmail.com">b.alghawi21@gmail.com</a> ~ 
  CinemaTech
</p>
<style>
  a {
    color: aliceblue;
  }
  .footer-end {
    font-size: 14px;
    color: aliceblue;
    text-align: center;
    margin-bottom: 20px;
  }
</style>