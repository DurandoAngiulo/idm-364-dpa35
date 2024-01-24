<script>
  import Hero from "$lib/Hero.svelte";
  import HeaderNav from "$lib/HeaderNav.svelte";
  import PlantCard from "../lib/PlantCard.svelte";
  import MissionStatement from "../lib/MissionStatement.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<Hero />
<HeaderNav />
<div class="flex flex-wrap justify-center mb-10">
  <div class="flex flex-wrap justify-center xl:w-9/12">
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
    <PlantCard />
  </div>
</div>
<MissionStatement />
<Footer />
