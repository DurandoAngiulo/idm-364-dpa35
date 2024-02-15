<!-- ItemDescription.svelte -->
<script>
  import { onMount } from "svelte";
  import QuantityButton from "$lib/QuantityButton.svelte";
  import { addToCart, cart } from "$lib/stores/cartStore.js";
  import Button from "$lib/Button.svelte";
  export let description;
  export let price;
  export let name;
  export let id;
  export let thumbnail;

  let quantity = 1;

  function handleAddToCart() {
    console.log("success");
    addToCart({
      id: id,
      name: name,
      quantity: quantity,
      price: price,
      thumbnail: thumbnail
    });
  }
  onMount(() => {
    const unsubscribe = cart.subscribe((value) => {
      // console.log(value, "cart!");
    });
  });
</script>

<div class="sm:w-5/12">
  <h2>{name}</h2>
  <p>{description}</p>
  <div class="flex flex-wrap justify-end mt-2">
    <p class="w-full text-right md:text-2xl">Price: {price}</p>
    <div class="w-full flex flex-wrap justify-end my-5"><QuantityButton bind:quantity /></div>
    <Button clickAction={handleAddToCart} text="Add To Cart" />
  </div>
</div>
