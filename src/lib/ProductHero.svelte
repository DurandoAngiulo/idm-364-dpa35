<script>
  import { browser } from "$app/environment";
  import { onMount, onDestroy } from "svelte";
  import { splitString } from "$lib/utils.js";
  export let name = "plantName";
  export let desktopBg;
  export let tabletBg;
  export let mobileBg;
  export let heroMsg;

  let windowWidth;
  let correctBackground;

  if (browser) {
    windowWidth = window.innerWidth;
  }

  function updateWidth() {
    if (browser) {
      windowWidth = window.innerWidth;
    }

    if (windowWidth > 1024) {
      correctBackground = desktopBg;
    } else if (windowWidth > 768) {
      correctBackground = tabletBg;
    } else {
      correctBackground = mobileBg;
    }
  }

  onMount(() => {
    // Initial width
    updateWidth();
    if (browser) {
      window.addEventListener("resize", updateWidth);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", updateWidth);
    }
  });
  const [nameBeginning, nameEnd] = splitString(name);
</script>

<div
  style="background-image: url({correctBackground})"
  class="heroBackground rounded-md px-3 py-3 flex flex-wrap content-between sm:content-evenly"
>
  <h1 class="font-normal block sm:w-9/12 md:w-7/12 lg:w-9/12 dark-cream">
    {nameBeginning} <span class="primary-green font-semibold">{nameEnd}</span>
  </h1>
  <p class="dark-cream italic text-xl block sm:w-9/12 md:w-6/12 lg:w-4/12">
    {heroMsg}
  </p>
</div>

<style>
  .heroBackground {
    background-repeat: no-repeat;
    background-size: cover;
    height: 460px;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) {
  }
</style>
