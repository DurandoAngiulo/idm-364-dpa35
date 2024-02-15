<!-- QuantityButton.svelte -->
<script>
  export let quantity;
</script>

<div class="quantityWidth rounded-3xl border-2 border-orange-950 px-5 flex justify-between h-8 self-center">
  <button class="bg-transparent text-orange-950" on:click={() => (quantity -= 1)}>-</button>
  <span class="self-center">{quantity}</span>
  <button class="bg-transparent text-orange-950" on:click={() => (quantity += 1)}>+</button>
</div>

<style>
  .quantityWidth {
    width: 100px;
  }
</style>
