<script>
  import QuantityButton from "$lib/QuantityButton.svelte";
  import Xbutton from "$lib/Xbutton.svelte";
</script>

<div class="mt-5 flex flex-wrap justify-center md:w-7/12">
  <!-- cart Item -->
  <div class="flex flex-wrap w-full mb-4 justify-between">
    <div class="mid-cream-bg flex h-20 flex-wrap justify-between content-center rounded-lg px-4 w-10/12">
      <div class="flex flex-wrap justify-between">
        <img class="cartImage rounded-md" src="https://via.placeholder.com/50x50" />
        <h3 class="block self-center ml-5">Aloe Vera</h3>
      </div>

      <QuantityButton />
    </div>
    <Xbutton />
  </div>
  <div class="flex flex-wrap w-full mb-4 justify-between">
    <div class="mid-cream-bg flex h-20 flex-wrap justify-between content-center rounded-lg px-4 w-10/12">
      <div class="flex flex-wrap justify-between">
        <img class="cartImage rounded-md" src="https://via.placeholder.com/50x50" />
        <h3 class="block self-center ml-5">Aloe Vera</h3>
      </div>

      <QuantityButton />
    </div>
    <Xbutton />
  </div>
</div>

<style>
  .cartImage {
    width: 50px;
    height: 50px;
  }
</style>
