<!-- Home.svelte -->
<script>
  import Hero from "$lib/Hero.svelte";
  import HeaderNav from "$lib/HeaderNav.svelte";
  import PlantCard from "$lib/PlantCard.svelte";
  import MissionStatement from "$lib/MissionStatement.svelte";
  import { filter } from "$lib/stores/filterStore.js"; // Import the filter store
  import { onMount } from "svelte";

  export let data;

  let filteredPlants = [];

  const filterPlants = () => {
    filteredPlants.length = 0;
    data.plants.forEach((plant) => {
      if (plant.category === $filter) {
        filteredPlants.push(plant);
      }
    });
  };

  onMount(() => {
    filterPlants();

    const unsubscribe = filter.subscribe(() => {
      filterPlants();
    });
  });

  const handleFilterChange = (newFilter) => {
    filter.set(newFilter);
  };
</script>

<Hero />
<HeaderNav bind:selectedFilter={$filter} selectedFilterChange={handleFilterChange} />

<div class="flex flex-wrap justify-center mb-10">
  <div class="flex flex-wrap justify-center xl:w-9/12">
    {#each filteredPlants as { name, slug, price, thumbnail, id }}
      <PlantCard {name} {slug} {price} {thumbnail} {id} />
    {/each}
  </div>
</div>
<MissionStatement />
