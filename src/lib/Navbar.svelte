<script>
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="mb-5">
  <div class="flex justify-between items-center">
    <div class="">
      <h1 class=" dark-brown text-3xl font-bol w-max block mr-8">Arid <span class="primary-green">Oasis</span></h1>
    </div>

    <div class="desktop-nav flex justify-between items-center w-9/12">
      <div>
        <a href="#" class="dark-brown navlink">Browse</a>
        <a href="#" class="dark-brown mx-4 navlink">Collections</a>
        <a href="#" class="dark-brown navlink">About</a>
      </div>

      <div class="flex justify-between">
        <!-- Replace the placeholder URLs with your actual image URLs -->
        <img src="https://via.placeholder.com/24" alt="Image 1" class="h-8 w-8" />
        <img src="https://via.placeholder.com/24" alt="Image 2" class="h-8 w-8 ml-2" />
        <img src="https://via.placeholder.com/24" alt="Image 3" class="h-8 w-8 ml-2" />
      </div>
    </div>

    <div class="mobile-nav md:hidden">
      <button class="text-white focus:outline-none" aria-label="Toggle Menu" on:click={toggleMenu}>
        <img src="https://via.placeholder.com/24" alt="Image 1" class="h-8 w-8" />
      </button>

      {#if isMenuOpen}
        <div class="absolute top-13 right-0 p-4 space-y-4 w-full mobileNavBg">
          <a href="#" class="dark-brown block navlink">Browse</a>
          <a href="#" class="dark-brown block navlink">Collections</a>
          <a href="#" class="dark-brown block navlink">About</a>
          <div class="flex w-3/12 justify-between">
            <!-- Replace the placeholder URLs with your actual image URLs -->
            <img src="https://via.placeholder.com/24" alt="Image 1" class="h-8 w-8" />
            <img src="https://via.placeholder.com/24" alt="Image 2" class="h-8 w-8 ml-2" />
            <img src="https://via.placeholder.com/24" alt="Image 3" class="h-8 w-8 ml-2" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</nav>

<style>
  .navlink {
    font-family: "Kalnia", sans-serif;
    font-weight: 400;
  }
  .mobileNavBg {
    background-color: var(--light-cream);
  }
  @media (min-width: 0px) and (max-width: 639px) {
    .desktop-nav {
      display: none;
    }
  }

  @media (min-width: 640px) {
    .mobile-nav {
      display: none;
    }
  }
</style>
