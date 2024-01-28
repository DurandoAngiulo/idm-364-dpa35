<script>
  import ProductHero from "$lib/ProductHero.svelte";
  import DataCard from "$lib/DataCard.svelte";
  import ItemCartImage from "$lib/ItemCartImage.svelte";
  import ItemDescription from "$lib/ItemDescription.svelte";
</script>

<ProductHero />
<h2 class="text-center my-8 text-lg sm:text-2xl lg:text-4xl">
  Is This Plant right for <span class="primary-green font-semibold">You?</span>
</h2>
<div class="flex justify-center">
  <div
    class=" grid grid-cols-2 justify-items-center gap-4 sm:gap-8 sm:w-9/12 lg:grid-cols-4 lg:gap-x-10 lg:w-full xl:w-11/12"
  >
    <DataCard />
    <DataCard />
    <DataCard />
    <DataCard />
  </div>
</div>
<div class="mt-20 sm:flex sm:justify-between">
  <ItemCartImage />
  <ItemDescription />
</div>
