<script>
  import homeHeaderImageMobile from "$lib/dist/images/homeHeader-mobile.jpg";
  import homeHeaderImageTablet from "$lib/dist/images/homeHeader-tablet.jpg";
  import homeHeaderImageDesktop from "$lib/dist/images/homeHeader-desktop.jpg";
  import search from "$lib/dist/svgs/search.png";

  const mobile = "$lib/dist/images/homeHeader-mobile.jpg";
</script>

<div class="heroBackground rounded-md px-3 py-3 flex flex-wrap content-between">
  <h1 class="font-normal block sm:w-9/12 md:w-7/12 lg:w-9/12 dark-cream">
    Plant <span class="primary-green font-semibold">Name</span>
  </h1>
  <p class="italic text-xl block sm:w-9/12 md:w-6/12 lg:w-4/12">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>

<style>
  .heroBackground {
    background-image: url($lib/dist/images/homeHeader-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 460px;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .heroBackground {
      background-image: url($lib/dist/images/homeHeader-tablet.jpg);
    }
  }

  @media (min-width: 1024px) {
    .heroBackground {
      background-image: url($lib/dist/images/homeHeader-desktop.jpg);
    }
  }
</style>
