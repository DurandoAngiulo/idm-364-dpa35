<script>
  import Button from "$lib/Button.svelte";
  import Modal from "$lib/Modal.svelte";
  export let subtotal;
  export let tax;
  export let total;
  let isModalVisible = false;
  let modalMessage = "Congratulations! You have checked out.";
  function handleCheckout() {
    isModalVisible = true;
  }

  function closeModal() {
    isModalVisible = false;
  }
</script>

<div class="md:mt-5 md:w-4/12">
  <div class="flex dlex-wrap justify-between">
    <h3>Subtotal:</h3>
    <h3>${subtotal}</h3>
  </div>
  <div class="flex dlex-wrap justify-between">
    <p>Tax:</p>
    <p>+ ${tax}</p>
  </div>
  <div class="horizonBorder my-2"></div>
  <div class="flex dlex-wrap justify-between mb-2">
    <h3 class="text-xl">Total:</h3>
    <h3 class="text-xl">${total}</h3>
  </div>

  <Button text="Checkout" clickAction={handleCheckout} />
  {#if isModalVisible}
    <Modal message={modalMessage} {closeModal} />
  {/if}
</div>

<style>
  .horizonBorder {
    border-bottom: 1px solid var(--brown-grey);
    width: 100%;
    height: 0;
  }
</style>
