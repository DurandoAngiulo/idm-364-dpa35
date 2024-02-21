<script>
  export let text = "Click Me";
  export let clickAction;
</script>

<button
  class="px-2 py-1.5 rounded-md md:text-lg cursor-pointer custom-hover:bg-dim-green-500 transition-colors"
  on:click={clickAction}>{text}</button
>

<style>
  .custom-hover\:bg-dim-green-500:hover {
    background-color: #46532f;
  }
</style>
