import { slugify } from "$lib/utils";
import { db } from "$lib/firebase/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";

export async function load() {
  const plantsCollection = collection(db, "plants");
  const querySnapshot = await getDocs(plantsCollection);

  const plants = [];

  querySnapshot.forEach((doc) => {
    const plantData = doc.data();
    const plant = {
      id: doc.id,
      category: plantData.category,
      name: plantData.plantName,
      heroMessage: plantData.heroMessage,
      slug: slugify(plantData.plantName),
      price: plantData.price,
      watering: plantData.watering,
      sunlight: plantData.sunlight,
      temperature: plantData.temperature,
      soilType: plantData.soilType,
      thumbnail: plantData.thumbnail,
      productHeaderM: plantData.productHeaderM,
      productHeaderT: plantData.productHeaderT,
      productHeaderD: plantData.productHeaderD,
      productPng: plantData.productPng
    };
    plants.push(plant);
  });

  return { plants };
}
