<!-- Modal.svelte -->
<script>
  export let message;
  export let closeModal;
</script>

<div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
  <div class="modal bg-white rounded-lg shadow-xl p-6 relative modal-custom-size border-2 border-lime-700">
    <span class="close absolute top-0 right-0 m-4 cursor-pointer" on:click={closeModal}>&times;</span>
    <p class=" mt-9 mb-12 text-2xl text-center">{message}</p>
  </div>
</div>

<style>
  .modal-custom-size {
    width: 350px;
    height: 150px;
  }
</style>
