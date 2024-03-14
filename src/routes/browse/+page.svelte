<script>
  import PlantCard from "$lib/PlantCard.svelte";
  import MissionStatement from "$lib/MissionStatement.svelte";
  import { db } from "$lib/firebase/firebase.js";
  export let data;
  let filter = "bestseller";
  console.log(db);
</script>

<div class="max-w-screen-xl mx-auto">
  <h1 class="text-center mb-10">Browse All Our <span class="primary-green font-semibold">Plants</span></h1>
  <div class="flex flex-wrap justify-center mb-10">
    <div class="flex flex-wrap justify-center xl:w-9/12">
      {#each data.plants as { name, slug, price, thumbnail, id }}
        <PlantCard {name} {slug} {price} {thumbnail} {id} />
      {/each}
    </div>
  </div>
</div>

<MissionStatement />
