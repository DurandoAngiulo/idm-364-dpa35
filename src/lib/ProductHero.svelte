<script>
  import { onMount } from "svelte";
  import { splitString } from "$lib/utils.js";
  export let name = "plantName";
  export let desktopBg;
  export let tabletBg;
  export let mobileBg;
  export let heroMsg;

  let correctBackground = onMount(async () => {
    let backgroundBreakpoint;
    const windowWidth = window.innerWidth;

    switch (true) {
      case windowWidth < 640:
        backgroundBreakpoint = mobileBg;
        break;

      case windowWidth >= 640 && windowWidth < 1024:
        backgroundBreakpoint = tabletBg;
        break;

      case windowWidth >= 1024:
        backgroundBreakpoint = desktopBg;
        break;

      default:
        console.log("Unknown window width");
    }

    correctBackground = backgroundBreakpoint;
    console.log(correctBackground);
  });
  console.log(correctBackground);
  const [nameBeginning, nameEnd] = splitString(name);
</script>

{#await correctBackground}
  <p>Loading...</p>
{:then}
  <div
    style="--image_url: url({correctBackground})"
    class="heroBackground rounded-md px-3 py-3 flex flex-wrap content-between"
  >
    <h1 class="font-normal block sm:w-9/12 md:w-7/12 lg:w-9/12 dark-cream">
      {nameBeginning} <span class="primary-green font-semibold">{nameEnd}</span>
    </h1>
    <p class="italic text-xl block sm:w-9/12 md:w-6/12 lg:w-4/12">
      {heroMsg}
    </p>
  </div>
{/await}

<style>
  .heroBackground {
    background-image: var(--image-url);
    background-repeat: no-repeat;
    background-size: cover;
    height: 460px;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .heroBackground {
      background-image: var(--image-url);
    }
  }

  @media (min-width: 1024px) {
    .heroBackground {
      background-image: var(--image-url);
    }
  }
</style>
