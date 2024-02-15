import { addToCart } from "$lib/stores/cartStore.js";
export function slugify(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function splitString(inputString) {
  const words = inputString.trim().split(" ");
  // console.log(words);
  const variable1 = words.slice(0, -1).join(" ");
  const variable2 = words[words.length - 1];
  return [variable1, variable2];
}

export function handleAddToCart() {
  console.log("success");
  addToCart({
    id: id,
    name: name,
    quantity: quantity
  });
}
