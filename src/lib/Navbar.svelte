<script>
  import menu from "$lib/dist/svgs/menu.png";
  import searchNav from "$lib/dist/svgs/search-nav.png";
  import cartImage from "$lib/dist/svgs/cart.png";
  import profile from "$lib/dist/svgs/profile.png";
  import { cartCount } from "$lib/stores/cartStore.js";
  import { writable } from "svelte/store";

  let isMenuOpen = false;
  let cartQuantity = writable(0);

  $: {
    cartCount.subscribe((value) => {
      cartQuantity.set(value);
    });
  }

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="mb-5">
  <div class="flex justify-between items-center">
    <div class="">
      <a href="/"
        ><h1 class=" dark-brown text-3xl font-bol w-max block mr-8">
          Arid <span class="primary-green">Oasis</span>
        </h1></a
      >
    </div>

    <div class="desktop-nav flex">
      <div class="mr-10">
        <a href="/browse" class="dark-brown navlink mr-5 text-lg">Browse</a>
        <!-- <a href="/about" class="dark-brown navlink text-lg">About</a> -->
      </div>

      <div class="flex justify-between">
        <!-- <img src={searchNav} alt="search" class="h-8 w-8" /> -->
        <a href="/cart">
          <div class="relative">
            <img src={cartImage} alt="cart" class="h-8 w-8 ml-2" />
            {#if $cartQuantity > 0}
              <div
                class="absolute top-0 left-8 h-4 w-4 bg-lime-800 text-white rounded-full flex items-center justify-center text-xs"
              >
                {$cartQuantity}
              </div>
            {/if}
          </div>
        </a>
        <!-- <img src={profile} alt="profile" class="h-8 w-8 ml-2" /> -->
      </div>
    </div>

    <div class="mobile-nav md:hidden">
      <button class="text-white focus:outline-none bg-transparent" aria-label="Toggle Menu" on:click={toggleMenu}>
        <img src={menu} alt="menu" class="" />
      </button>

      {#if isMenuOpen}
        <div class="absolute top-13 right-0 p-4 space-y-4 w-full mobileNavBg">
          <a href="/browse" class="dark-brown block navlink">Browse</a>
          <!-- <a href="/about" class="dark-brown block navlink">About</a> -->
          <div class="flex w-3/12 justify-between">
            <!-- <img src={searchNav} alt="search" class="h-8 w-8" /> -->
            <a href="/cart"><img src={cartImage} alt="cart" class="h-8 w-8 ml-2" /></a>
            <!-- <img src={profile} alt="profile" class="h-8 w-8 ml-2" /> -->
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
