<script></script>

<div class="dark-cream-bg rounded-lg sm:flex">
  <div class="missionBackground rounded-t-lg rounded-b-none sm:rounded-b-none sm:rounded-l-lg sm:rounded-r-none"></div>
  <div class="px-4 py-4 mb-4 sm:w-1/2 sm:flex sm: flex-wrap sm:content-center md:px-8">
    <h2 class="text-3xl text-center mb-3 sm:text-4xl">
      Our <span class="primary-green font-semibold">Story</span>
    </h2>
    <p class="lg:text-xl">
      We believe that everyone can benefit from caring for a plant. From nurturing your seedling, to taking pride in
      watching it bloom, we know that there’s a plant out there for everyone. Whether you're an experienced gardener or
      a new “plant parent” our chief goal at Arid Oasis is to find the perfect succulent for you!
    </p>
  </div>
</div>

<style>
  .missionBackground {
    background-image: url($lib/dist/images/mission-image.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .missionBackground {
      background-image: url($lib/dist/images/mission-image.jpg);
      width: 50%;
      height: 400px;
    }
  }

  @media (min-width: 1024px) {
    .missionBackground {
      background-image: url($lib/dist/images/mission-image.jpg);
      width: 50%;
      height: 550px;
    }
  }
</style>
