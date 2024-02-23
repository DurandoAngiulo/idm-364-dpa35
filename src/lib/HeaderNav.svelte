<script>
  export let selectedFilter;
  export let selectedFilterChange;

  // Function to handle filter click
  const handleFilterClick = (newFilter) => {
    selectedFilterChange(newFilter);
    console.log(selectedFilter);
  };
</script>

<div class="my-6 flex justify-center w-full">
  <h2
    class="vertBorder pr-1.5 md:pr-3 hoverElement"
    on:click={() => handleFilterClick("bestseller")}
    class:selected={selectedFilter === "bestseller"}
  >
    Bestsellers
  </h2>
  <h2
    class="vertBorder px-1.5 md:px-3 hoverElement"
    on:click={() => handleFilterClick("newArrival")}
    class:selected={selectedFilter === "newArrival"}
  >
    New Arrivals
  </h2>
  <h2
    class="pl-1.5 md:pl-3 hoverElement"
    on:click={() => handleFilterClick("topRated")}
    class:selected={selectedFilter === "topRated"}
  >
    Top Rated
  </h2>
</div>

<style>
  .vertBorder {
    border-right: 1px solid var(--brown-grey);
  }
  .hoverElement:hover {
    color: var(--primary-green);
    cursor: pointer;
  }
  .selected {
    color: var(--primary-green);
  }
</style>
