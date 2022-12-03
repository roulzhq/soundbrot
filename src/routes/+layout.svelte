<script>
  import Header from "$lib/Header.svelte";
  import Sidebar from "$lib/Sidebar.svelte";

  import "../app.css";
</script>

<Header />

<div class="container">
  <Sidebar />

  <main class="content">
    <slot />
  </main>
</div>


<style>
  .container {
    display: grid;
    grid-template-columns: 100px auto;
    height: calc(100% - 60px);
  }
</style>