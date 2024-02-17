import { error } from "@sveltejs/kit";
import { slugify } from "$lib/utils.js";
import { db } from "$lib/firebase/firebase.js";
import { collection, where, getDocs, query } from "firebase/firestore";

export async function load({ params }) {
  const slug = params.slug;

  try {
    const plantsCollection = collection(db, "plants");
    const q = query(plantsCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const plantData = docSnapshot.data();

      const plant = {
        id: docSnapshot.id,
        ...plantData,
        slug: slugify(plantData.plantName)
      };

      return { plant };
    } else {
      throw new Error(404);
    }
  } catch (error) {
    console.error("Error fetching plant data:", error);
    throw error;
  }
}
