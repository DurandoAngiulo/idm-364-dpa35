// cartStore.js
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

export function addQuantityToCartItem(itemId) {
  cart.update((items) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      items[itemIndex].quantity += 1;
    }
    return items;
  });
}

export function removeQuantityFromCartItem(itemId) {
  cart.update((items) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1 && items[itemIndex].quantity > 1) {
      items[itemIndex].quantity -= 1;
    }
    return items;
  });
}
