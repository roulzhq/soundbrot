<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<svelte:head>
  <title>Soundbrot</title>
  <meta name="description" content="A sound bot" />
</svelte:head>

<div>
  {#each data.sounds as sound}
    <button on:click={() => alert("Jonas du spasst")}>{sound.name}</button>
  {/each}
</div>
