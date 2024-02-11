<script>
  import water from "$lib/dist/svgs/water.png";
  import soil from "$lib/dist/svgs/soil.png";
  import sunlight from "$lib/dist/svgs/sunlight.png";
  import temp from "$lib/dist/svgs/temp.png";
  export let type;
  export let waterInfo;
  export let sunInfo;
  export let soilInfo;
  export let tempInfo;
</script>

{#if type === "water"}
  <div class=" drop-shadow-md container-width mid-cream-bg rounded-xl flex flex-wrap justify-center py-5">
    <div class="w-full flex justify-center"><img src={water} /></div>
    <h2 class="sm:text-2xl">Watering</h2>
    <div class="horizonBorder"></div>
    <h2 class="text-lg sm:text-4xl text-center">Every <span class="primary-green">{waterInfo}</span></h2>
  </div>
{:else if type === "sunlight"}
  <div class=" drop-shadow-md container-width mid-cream-bg rounded-xl flex flex-wrap justify-center py-5">
    <div class="w-full flex justify-center"><img src={sunlight} /></div>
    <h2 class="sm:text-2xl">Sunlight</h2>
    <div class="horizonBorder"></div>
    <h2 class="text-lg sm:text-4xl text-center"><span class="primary-green">{sunInfo}</span> Sunlight</h2>
  </div>
{:else if type === "temperature"}
  <div class=" drop-shadow-md container-width mid-cream-bg rounded-xl flex flex-wrap justify-center py-5">
    <div class="w-full flex justify-center"><img src={temp} /></div>
    <h2 class="sm:text-2xl">Temperature</h2>
    <div class="horizonBorder"></div>
    <h2 class="text-lg sm:text-4xl text-center"><span class="primary-green">{tempInfo}</span> Degrees</h2>
  </div>
{:else}
  <div class=" drop-shadow-md container-width mid-cream-bg rounded-xl flex flex-wrap justify-center py-5">
    <div class="w-full flex justify-center"><img src={soil} /></div>
    <h2 class="sm:text-2xl">Soil Type</h2>
    <div class="horizonBorder"></div>
    <h2 class="text-lg sm:text-4xl text-center"><span class="primary-green">{soilInfo}</span> Mix</h2>
  </div>
{/if}

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
