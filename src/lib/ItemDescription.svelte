<script>
  import QuantityButton from "$lib/QuantityButton.svelte";
  import Button from "$lib/Button.svelte";
</script>

<div class="sm:w-5/12">
  <h2 class="text-2xl text-center md:text-end md:text-4xl"><span class="primary-green">Aloe Vera </span>Plant</h2>
  <div class="flex justify-center my-3"><div class="horizonBorder"></div></div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <div class=" flex justify-between mt-5 lg:justify-end lg:flex-wrap">
    <p class="font-medium text-lg md:w-full lg:text-end">Price $50</p>
    <QuantityButton />
  </div>
  <div class="flex justify-end mt-5"><Button /></div>
</div>

<style>
  .horizonBorder {
    border-bottom: 1px solid var(--brown-grey);
    width: 100%;
    height: 0;
  }
</style>
