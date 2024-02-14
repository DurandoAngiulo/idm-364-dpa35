<script>
  import CartItems from "$lib/CartItems.svelte";
  import CartTotal from "$lib/CartTotal.svelte";
</script>

<h1>Your Cart</h1>
<div class="md:flex md:justify-between md:px-5">
  <CartItems />
  <CartTotal />
</div>

<style></style>
