<script>
  export let clickAction;
</script>

<button
  type="button"
  class="rounded-md p-2 inline-flex items-center justify-center brown-grey hover: hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-inse"
  on:click={clickAction}
>
  <span class="sr-only">Close menu</span>
  <svg
    class="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
