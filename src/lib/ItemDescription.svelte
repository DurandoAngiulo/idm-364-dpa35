<script>
  import QuantityButton from "$lib/QuantityButton.svelte";
  import Button from "$lib/Button.svelte";
  export let description;
  export let price;
  export let name;
</script>

<div class="sm:w-5/12">
  <h2 class="text-2xl text-center md:text-end md:text-4xl"><span class="primary-green">{name} </span>Plant</h2>
  <div class="flex justify-center my-3"><div class="horizonBorder"></div></div>
  <p>
    {description}
  </p>
  <div class=" flex justify-between mt-5 lg:justify-end lg:flex-wrap">
    <p class="font-medium text-lg md:w-full lg:text-end">Price {price}</p>
    <QuantityButton />
  </div>
  <div class="flex justify-end mt-5"><Button text="Add to Cart" /></div>
</div>

<style>
  .horizonBorder {
    border-bottom: 1px solid var(--brown-grey);
    width: 100%;
    height: 0;
  }
</style>
