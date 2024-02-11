<!-- ItemCartPreview.svelte -->
<script>
  export let image;
</script>

<div class="container">
  <div class="square large drop-shadow-md"></div>
  <div class="square small drop-shadow-md"></div>
  <img class="image-overlay" src={image} />
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 250px;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .square {
    position: absolute;
    bottom: 0;
    left: 5rem;
    border-radius: 0.5rem;
  }

  .large {
    width: 10rem;
    height: 10rem;
    background-color: var(--dark-cream);
  }

  .small {
    width: 7rem;
    height: 7rem;
    background-color: var(--brown-grey);
    transform: translate(-30%, 30%);
  }

  .image-overlay {
    position: absolute;
    top: 40px;
    left: 35%;
    transform: translateX(-10%);
    width: 250px;
    height: auto;
    z-index: 2;
  }

  @media only screen and (min-width: 640px) and (max-width: 768px) {
    .container {
      height: 200px;
    }
    .image-overlay {
      top: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
      height: 200px;
    }
    .image-overlay {
      top: 0px;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    .container {
      height: 200px;
    }
    .image-overlay {
      width: 300px;
      top: -50px;
    }
    .large {
      width: 13rem;
      height: 13rem;
      background-color: var(--dark-cream);
    }

    .small {
      width: 10rem;
      height: 10rem;
      background-color: var(--brown-grey);
      transform: translate(-30%, 30%);
    }
  }
  @media only screen and (min-width: 1280px) {
    .container {
      height: 200px;
    }
    .image-overlay {
      width: 300px;
      top: -50px;
    }
    .large {
      width: 13rem;
      height: 13rem;
      background-color: var(--dark-cream);
    }

    .small {
      width: 10rem;
      height: 10rem;
      background-color: var(--brown-grey);
      transform: translate(-30%, 30%);
    }
  }
</style>
