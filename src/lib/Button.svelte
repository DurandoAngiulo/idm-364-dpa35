<script>
  export let text = "Click Me";
  export let clickAction;
</script>

<button class="px-2 py-1.5 rounded-md md:text-lg cursor-pointer" on:click={clickAction}>{text}</button>

<style>
</style>
