<script>
  import { onMount } from "svelte";
  import { invalidate } from "$app/navigation";

  import db from "$lib/supabase";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  import "$styles/app.css";

  onMount(() => {
    const {
      data: { subscription },
    } = db.auth.onAuthStateChange((event, session) => {
      invalidate("supabase:auth");
    });

    return () => {
      subscription.unsubscribe();
    };
  });
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
