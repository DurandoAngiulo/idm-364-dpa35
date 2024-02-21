<script>
  import { cart, addToCart, removeFromCart } from "$lib/stores/cartStore.js";
  import { onMount } from "svelte";
  import QuantityButton from "$lib/QuantityButton.svelte";
  import Xbutton from "$lib/Xbutton.svelte"; // Import Xbutton component

  let cartItems = [];
  let quantities = {};
  export let subtotal = 0;

  onMount(() => {
    const unsubscribe = cart.subscribe((value) => {
      cartItems = value;
      getTotal(cartItems);
      updateQuantities();
    });
    return unsubscribe;
  });

  function updateQuantities() {
    quantities = {};
    cartItems.forEach((item) => {
      quantities[item.id] = item.quantity;
    });
  }

  function getTotal(cart) {
    subtotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }
</script>

<div class="mt-5 flex flex-wrap justify-center md:w-8/12">
  {#each cartItems as item (item.id)}
    <div class="flex flex-wrap w-full mb-4 justify-between self-center">
      <div
        class="py-3 mid-cream-bg flex h-24 flex-wrap justify-between content-center rounded-lg px-4 sm:h-20 md:py-0 w-10/12"
      >
        <div class="flex flex-wrap justify-between">
          <img class="cartImage rounded-md" src={item.thumbnail} alt={item.name} />
          <h3 class="block self-center ml-5">{item.name}</h3>
        </div>

        <div class="w-full flex flex-wrap justify-end sm:w-auto">
          <p class="mr-10 self-center">${item.price}</p>
          <QuantityButton bind:quantity={quantities[item.id]} />
        </div>
      </div>
      <div class="sm:mr-10 self-center lg:mr-20">
        <!-- Pass removeFromCart function to Xbutton component -->
        <Xbutton clickAction={() => removeFromCart(item.id)} />
      </div>
    </div>
  {/each}
</div>

<style>
  .cartImage {
    width: 50px;
    height: 50px;
  }
</style>
