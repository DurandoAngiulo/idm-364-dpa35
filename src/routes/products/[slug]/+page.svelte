<script>
  import ProductHero from "$lib/ProductHero.svelte";
  import DataCard from "$lib/DataCard.svelte";
  import ItemCartImage from "$lib/ItemCartImage.svelte";
  import ItemDescription from "$lib/ItemDescription.svelte";
  export let data;
  const {
    id,
    plantName,
    heroMessage,
    description,
    price,
    watering,
    sunlight,
    temperature,
    soilType,
    productHeaderM,
    productHeaderT,
    productHeaderD,
    productPng,
    thumbnail
  } = data.plant;
</script>

<ProductHero
  name={plantName}
  heroMsg={heroMessage}
  desktopBg={productHeaderD}
  tabletBg={productHeaderT}
  mobileBg={productHeaderM}
/>
<h2 class="text-center my-8 text-lg sm:text-2xl lg:text-4xl">
  Is This Plant right for <span class="primary-green font-semibold">You?</span>
</h2>
<div class="flex justify-center">
  <div
    class=" grid grid-cols-2 justify-items-center gap-4 sm:gap-8 sm:w-9/12 lg:grid-cols-4 lg:gap-x-10 lg:w-full xl:w-11/12"
  >
    <DataCard type="water" waterInfo={watering} sunInfo={sunlight} tempInfo={temperature} soilInfo={soilType} />
    <DataCard type="sunlight" waterInfo={watering} sunInfo={sunlight} tempInfo={temperature} soilInfo={soilType} />
    <DataCard type="temperature" waterInfo={watering} sunInfo={sunlight} tempInfo={temperature} soilInfo={soilType} />
    <DataCard type="soil" waterInfo={watering} sunInfo={sunlight} tempInfo={temperature} soilInfo={soilType} />
  </div>
</div>
<div class="mt-20 sm:flex sm:justify-between">
  <ItemCartImage image={productPng} />
  <ItemDescription {id} {description} {price} name={plantName} {thumbnail} />
</div>
