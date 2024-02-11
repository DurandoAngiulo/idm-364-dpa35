<script>
  import Hero from "$lib/Hero.svelte";
  import HeaderNav from "$lib/HeaderNav.svelte";
  import PlantCard from "$lib/PlantCard.svelte";
  import MissionStatement from "$lib/MissionStatement.svelte";

  export let data;
</script>

<Hero />
<HeaderNav />
<div class="flex flex-wrap justify-center mb-10">
  <div class="flex flex-wrap justify-center xl:w-9/12">
    {#each data.plants as { name, slug, price, thumbnail }}
      <PlantCard {name} {slug} {price} {thumbnail} />
    {/each}
  </div>
</div>
<MissionStatement />
