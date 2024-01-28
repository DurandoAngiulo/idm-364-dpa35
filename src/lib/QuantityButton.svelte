<script>
  export let initialValue = 1;
  let quantity = initialValue;

  function increase() {
    quantity += 1;
  }

  function decrease() {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
</script>

<div class=" quantityWidth rounded-3xl border-2 border-orange-950 px-5 flex justify-between">
  <button class="bg-transparent text-orange-950" on:click={decrease}>-</button>
  <span class="">{quantity}</span>
  <button class="bg-transparent text-orange-950" on:click={increase}>+</button>
</div>

<style>
  .quantityWidth {
    width: 100px;
  }
</style>
