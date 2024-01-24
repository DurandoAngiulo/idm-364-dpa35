<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="cardContainer mb-5 mx-9 relative">
  <div class="imageContainer">
    <img class="rounded-md mb-2 cardImage imageHover" src="https://via.placeholder.com/500x400" />
    <div class="overlay rounded-md">
      <div class="detailsButton">
        <Button label="More Details" />
      </div>
    </div>
  </div>
  <div class="sm:flex sm:justify-between my-3">
    <h3 class="leading-3">Aloe vera</h3>
    <p class="primary-green font-medium leading-3 mt-2 sm:m-0">Price $50</p>
  </div>
  <div class="existingButton">
    <Button />
  </div>
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
