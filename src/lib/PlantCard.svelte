<script>
  import Button from "$lib/Button.svelte";
  import { addToCart, cart } from "$lib/stores/cartStore.js";
  import Modal from "$lib/Modal.svelte";

  export let thumbnail = "https://via.placeholder.com/500x400";
  export let name = "name";
  export let price = "$00.00";
  export let slug;
  export let id;
  let isModalVisible = false;
  let modalMessage = "Item added to cart!";

  let quantity = 1;

  function handleAddToCart() {
    console.log("success");
    isModalVisible = true;
    addToCart({
      id: parseInt(id),
      name: name,
      quantity: quantity,
      price: price,
      thumbnail: thumbnail
    });
  }
  function closeModal() {
    isModalVisible = false;
  }
</script>

<div class="cardContainer mb-5 mx-9 relative">
  <div class="imageContainer">
    <img class="rounded-md mb-2 cardImage imageHover" src={thumbnail} alt="my image" />
    <div class="overlay rounded-md">
      <div class="detailsButton">
        <a href="/products/{slug}"> <Button text="More Details" clickAction={""} /></a>
      </div>
    </div>
  </div>
  <div class="sm:flex sm:justify-between my-3">
    <h3 class="leading-3">{name}</h3>
    <p class="primary-green font-medium leading-3 mt-2 sm:m-0">${price}.00</p>
  </div>
  <div class="existingButton">
    <Button text="Add To Cart" clickAction={handleAddToCart} />
  </div>
  {#if isModalVisible}
    <Modal message={modalMessage} {closeModal} />
  {/if}
</div>

<style>
  .cardContainer {
    width: 300px;
  }

  .imageContainer {
    position: relative;
  }

  .cardImage {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0.375rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(183, 170, 162, 0.5);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
  }

  .overlay:hover {
    opacity: 1;
  }

  .detailsButton {
    text-align: center;
  }

  .existingButton {
    /* Styles for the existing button, if any */
  }

  @media only screen and (min-width: 640px) and (max-width: 768px) {
    .cardContainer {
      width: 300px;
    }
  }
</style>
