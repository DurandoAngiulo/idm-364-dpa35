<script>
  import water from "$lib/dist/svgs/water.png";
</script>

<div class=" drop-shadow-md container-width mid-cream-bg rounded-xl flex flex-wrap justify-center py-5">
  <div class="w-full flex justify-center"><img src={water} /></div>
  <h2 class="sm:text-2xl">Watering</h2>
  <div class="horizonBorder"></div>
  <h2 class="text-lg sm:text-4xl text-center">Once every <span class="primary-green">2 weeks</span></h2>
</div>

<style>
  .horizonBorder {
    border-bottom: 1px solid var(--brown-grey);
    width: 80%;
    height: 0;
  }
  .container-width {
    width: 150px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    .container-width {
      width: 230px;
      height: 260px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .container-width {
      width: 200px;
      height: 230px;
    }
  }
  @media (min-width: 1280px) {
    .container-width {
      width: 230px;
      height: 260px;
    }
  }
</style>
