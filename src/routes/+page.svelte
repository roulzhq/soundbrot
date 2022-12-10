<script lang="ts">
  import type { LayoutData } from "./$types";

  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let data: LayoutData;

  onMount(() => {
    if (!data.session) {
      goto("/auth");
    } else {
      goto("/app/buttons");
    }
  });
</script>

<svelte:head>
  <title>Supabase + SvelteKit</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

<slot />
