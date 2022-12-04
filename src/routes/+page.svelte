<script>
  import AddButton from "$lib/AddButton.svelte";
  import Button from "$lib/Button.svelte";
</script>

<div class="buttons">
  <Button name="1" />
  <Button name="penis" />
  <Button name="penis" />
  <Button name="penis" />
  <Button name="penis" />
  <Button name="penis" />
  <Button name="jonas" />
  <AddButton />
</div>

<style>
  .buttons {
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    gap: 16px;
  }
</style>
