<script>
  import menu from "$lib/dist/svgs/menu.png";
  import searchNav from "$lib/dist/svgs/search-nav.png";
  import cart from "$lib/dist/svgs/cart.png";
  import profile from "$lib/dist/svgs/profile.png";
  let isMenuOpen = false;

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

    <div class="desktop-nav flex justify-between items-center w-9/12">
      <div>
        <a href="/browse" class="dark-brown navlink">Browse</a>
        <a href="/collections" class="dark-brown mx-4 navlink">Collections</a>
        <a href="/about" class="dark-brown navlink">About</a>
      </div>

      <div class="flex justify-between">
        <img src={searchNav} alt="search" class="h-8 w-8" />
        <a href="/cart"><img src={cart} alt="cart" class="h-8 w-8 ml-2" /></a>
        <img src={profile} alt="profile" class="h-8 w-8 ml-2" />
      </div>
    </div>

    <div class="mobile-nav md:hidden">
      <button class="text-white focus:outline-none bg-transparent" aria-label="Toggle Menu" on:click={toggleMenu}>
        <img src={menu} alt="menu" class="" />
      </button>

      {#if isMenuOpen}
        <div class="absolute top-13 right-0 p-4 space-y-4 w-full mobileNavBg">
          <a href="/browse" class="dark-brown block navlink">Browse</a>
          <a href="/collections" class="dark-brown block navlink">Collections</a>
          <a href="/about" class="dark-brown block navlink">About</a>
          <div class="flex w-3/12 justify-between">
            <img src={searchNav} alt="search" class="h-8 w-8" />
            <a href="/cart"><img src={cart} alt="cart" class="h-8 w-8 ml-2" /></a>
            <img src={profile} alt="profile" class="h-8 w-8 ml-2" />
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
