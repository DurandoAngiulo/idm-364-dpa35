<script>
  import CartItems from "$lib/CartItems.svelte";
  import CartTotal from "$lib/CartTotal.svelte";
  export let data;
  // console.log(data);
</script>

<h1>Your Cart</h1>
<div class="md:flex md:justify-between">
  <CartItems {data} />
  <CartTotal />
</div>

<style></style>
