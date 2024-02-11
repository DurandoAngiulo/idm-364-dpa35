import { slugify } from "$lib/utils";
import { plants } from "$lib/data";

export function load() {
  return {
    plants: plants.map((plant) => ({
      name: plant.plantName,
      heroMessage: plant.heroMessage,
      slug: slugify(plant.plantName),
      price: plant.price,
      watering: plant.watering,
      sunlight: plant.sunlight,
      temperature: plant.temperature,
      soilType: plant.soilType,
      thumbnail: plant.thumbnail,
      productHeaderM: plant.productHeaderM,
      productHeaderT: plant.productHeaderT,
      productHeaderD: plant.productHeaderD,
      productPng: plant.productPng
    }))
  };
}
