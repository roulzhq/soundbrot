<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import type { LayoutData } from "../$types";

  export let data: LayoutData;

  function playSound(id: string) {
    console.log("playing", id);
  }
</script>

<svelte:head>
  <title>Soundbrot</title>
  <meta name="description" content="A sound bot" />
</svelte:head>

<div class="buttons">
  {#each data.sounds as sound}
    <Button onClick={() => playSound(sound.id)}>{sound.name}</Button>
  {/each}
</div>

<style lang="scss">
  .buttons {
    padding: 32px;
  }
</style>
