<script lang="ts">
  export let onClick: () => void;
</script>

<button class="button" on:click={onClick}> <slot /> </button>

<style>
  .button {
    padding: 16px;
    background-color: #17c0eb;
    border: none;
    transition: all 100ms ease-in-out;
    box-shadow: 0px 0px 6px -4px #17c0eb;
    cursor: pointer;
  }

  .button:hover {
    background-color: #1aecec;
    box-shadow: 0px 0px 16px -4px #17c0eb;
  }
</style>
