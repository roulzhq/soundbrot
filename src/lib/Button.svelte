<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";

  export let name: string = "";

  async function handleButtonClick() {
    const response = await invoke("greet", { name });
  }
</script>

<button class="button" on:click={handleButtonClick}> {name} </button>

<style>
  .button {
    padding: 16px;
    background-color: aqua;
    border: none;
  }

  .button:hover {
    background-color: rgb(15, 240, 240);
  }
</style>
