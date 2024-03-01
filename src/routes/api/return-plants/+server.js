import { json } from "@sveltejs/kit";
import { slugify } from "$lib/utils";
import { db } from "$lib/firebase/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";

export async function GET(request) {
  const plantsCollection = collection(db, "plants");
  const querySnapshot = await getDocs(plantsCollection);

  const plants = [];

  querySnapshot.forEach((doc) => {
    const plantData = doc.data();
    const plant = {
      id: doc.id,
      name: plantData.plantName
    };
    plants.push(plant);
  });

  return new Response(JSON.stringify(plants));
}
