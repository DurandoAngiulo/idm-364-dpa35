import { error } from "@sveltejs/kit";
import { slugify } from "$lib/utils.js";
import { plants } from "$lib/data";

export function load({ params }) {
  const plant = plants.find((plant) => slugify(plant.plantName) === params.slug);

  if (!plant) throw error(404);

  return {
    plant
  };
}
