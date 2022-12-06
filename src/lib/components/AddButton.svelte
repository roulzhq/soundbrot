<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import type { AddSoundBtn } from "src/types/api";

  let showModal: boolean = false;

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function handleFileUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target && target.files) {
      const file = target.files[0];
      const request: AddSoundBtn = {
        data: (await toBase64(file)) as string,
        name: file.name,
        size: file.size,
        kind: file.type,
      };

      const res = await invoke("upload", { data: JSON.stringify(request) });
    }
  }
</script>

<button class="button" on:click={() => (showModal = true)}> Add sound </button>

{#if showModal}
  <div class="add-button-modal">
    <div class="add-button-modal-content">
      <h1>New sound</h1>
      <input type="file" on:change={handleFileUpload} accept=".mp3, .wav" />
    </div>
  </div>
{/if}

<style>
  .add-button-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.333);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-button-modal-content {
    width: 400px;
    height: 400px;
    background-color: #fefefe;
    box-shadow: 3px 3px 6px #777777;
  }
</style>
