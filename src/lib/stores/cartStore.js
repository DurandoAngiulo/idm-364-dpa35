import { writable } from "svelte/store";

const initialCart = [];
export const cart = writable(initialCart);

export function addToCart(item) {
  cart.update((items) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += item.quantity;
    } else {
      items.push(item);
    }
    return items;
  });
}
export function removeFromCart(itemId) {
  cart.update((items) => items.filter((item) => item.id !== itemId));
}
