<script>
  import user from "$lib/state/user";
</script>

<header>
  <a href="/app/buttons" class="title">Soundbrot</a>
  <div class="extras">
    {$user?.email}
  </div>
</header>

<style lang="scss">
  header {
    background-color: #353535;
    height: 60px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .title {
      text-decoration: none;
      color: #17c0eb;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
      font-size: 1.6em;
    }

    .extras {
      color: #fefefe;
    }
  }
</style>
