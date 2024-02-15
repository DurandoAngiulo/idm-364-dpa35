<script>
  import CartItems from "$lib/CartItems.svelte";
  import CartTotal from "$lib/CartTotal.svelte";
  import { calculateTax } from "$lib/utils.js";
  export let data;

  let subtotal;
  $: tax = calculateTax(subtotal, 0.08);
  console.log(tax, "tax");
  $: total = (Number(subtotal) + Number(tax)).toFixed(2);
</script>

<h1>Your Cart</h1>
<div class="md:flex md:justify-between">
  <CartItems {data} bind:subtotal />
  <CartTotal {total} {tax} {subtotal} />
</div>

<style></style>
