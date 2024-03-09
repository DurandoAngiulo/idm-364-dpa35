<script>
  export let quantity;
  export let addQuantityToCart;
  export let removeQuantityFromCart;
</script>

<div class="quantityWidth rounded-3xl border-2 border-orange-950 px-5 flex justify-between h-8 self-center">
  <button class="bg-transparent text-orange-950" on:click={() => removeQuantityFromCart()}>-</button>
  <span class="self-center">{quantity}</span>
  <button class="bg-transparent text-orange-950" on:click={() => addQuantityToCart()}>+</button>
</div>

<style>
  .quantityWidth {
    width: 100px;
  }
</style>
