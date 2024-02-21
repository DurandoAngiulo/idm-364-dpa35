<script>
  import Hero from "$lib/Hero.svelte";
  import HeaderNav from "$lib/HeaderNav.svelte";
  import PlantCard from "$lib/PlantCard.svelte";
  import MissionStatement from "$lib/MissionStatement.svelte";
  import { db } from "$lib/firebase/firebase.js";
  import { collection, doc, setDoc } from "firebase/firestore";
  export let data;
  console.log(db)
</script>

<Hero />
<HeaderNav />
<div class="flex flex-wrap justify-center mb-10">
  <div class="flex flex-wrap justify-center xl:w-9/12">
    {#each data.plants as { name, slug, price, thumbnail, id }}
      <PlantCard {name} {slug} {price} {thumbnail} {id} />
    {/each}
  </div>
</div>
<MissionStatement />
