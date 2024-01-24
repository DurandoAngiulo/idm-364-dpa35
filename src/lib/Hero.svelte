<script>
  import homeHeaderImageMobile from "$lib/dist/images/homeHeader-mobile.jpg";
  import homeHeaderImageTablet from "$lib/dist/images/homeHeader-tablet.jpg";
  import homeHeaderImageDesktop from "$lib/dist/images/homeHeader-desktop.jpg";
  import search from "$lib/dist/svgs/search.png";

  const mobile = "$lib/dist/images/homeHeader-mobile.jpg";
</script>

<div class="heroBackground rounded-md px-3 pt-3 flex flex-wrap content-between">
  <div class="">
    <h1 class="font-normal block sm:w-9/12 md:w-7/12 lg:w-5/12">
      Find Your Dream <span class="primary-green font-semibold">Succulent</span>
    </h1>
    <p class="italic text-xl block sm:w-9/12 md:w-6/12 lg:w-4/12">
      Journey through hundreds of our plant species and find the perfect companion that speaks to you. A beautiful
      low-maintenance garden is only a couple clicks away!
    </p>
  </div>
  <div
    class=" mid-cream-bg flex content-center justify-between mb-3 px-2 h-10 rounded-lg w-full sm:w-7/12 md:w-5/12 lg:w-4/12"
  >
    <input class="searchInput self-center h-7 rounded-md w-9/12" />
    <div class="flex flex-wrap content-center justify-center brown-grey-bg mt-1.5 ml-1.5 mb-1.5 p-2 rounded-md">
      <img class="searchIcon" src={search} />
    </div>
  </div>
</div>

<!-- <picture>
        <source media="(min-width: 0px)" srcset={homeHeaderImageMobile} />
        <source media="(min-width: 640px)" srcset={homeHeaderImageTablet} />
        <source media="(min-width: 1024px)" srcset={homeHeaderImageTablet} />
        <img class="" src={homeHeaderImageDesktop} alt="Kami" />
      </picture> -->
<!-- <img
        srcset="
            {homeHeaderImageMobile} 375w,
            {homeHeaderImageTablet} 768w,
            {homeHeaderImageDesktop} 1200w
          "
        sizes="(max-width: 375px) 100vw, (max-width: 768px) 100vw, 1200px"
        src={homeHeaderImageMobile}
        alt="hero"
      /> -->

<style>
  .heroBackground {
    background-image: url($lib/dist/images/homeHeader-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 460px;
  }

  .searchBubble {
    width: 50px;
    height: 50px;
  }
  .searchIcon {
    width: 20px;
    height: auto;
    max-width: 100%;
  }
  .searchInput {
    background-color: rgba(255, 252, 245, 0.5);
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
