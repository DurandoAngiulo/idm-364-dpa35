<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="md:mt-5 md:w-4/12">
  <div class="flex dlex-wrap justify-between">
    <h3>Subtotal:</h3>
    <h3>$19.99</h3>
  </div>
  <div class="flex dlex-wrap justify-between">
    <p>Tax:</p>
    <p>+ $1.20</p>
  </div>
  <div class="horizonBorder my-2"></div>
  <div class="flex dlex-wrap justify-between mb-2">
    <h3 class="text-xl">Total:</h3>
    <h3 class="text-xl">22.19</h3>
  </div>

  <Button text="Checkout" />
</div>

<style>
  .horizonBorder {
    border-bottom: 1px solid var(--brown-grey);
    width: 100%;
    height: 0;
  }
</style>
