import { writable } from "svelte/store";

const initialCart = [];
export const cart = writable(initialCart);
export const cartCount = writable(0);

function updateCartCount(items) {
  let totalCount = 0;
  items.forEach((item) => {
    totalCount += item.quantity;
  });
  cartCount.set(totalCount);
}

export function addToCart(item) {
  cart.update((items) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += item.quantity;
    } else {
      items.push(item);
    }
    updateCartCount(items);
    return items;
  });
}

export function removeFromCart(itemId) {
  cart.update((items) => {
    const removedItem = items.find((item) => item.id === itemId);
    if (removedItem) {
      items = items.filter((item) => item.id !== itemId);
      updateCartCount(items);
    }
    return items;
  });
}

export function removeAllItemsFromCart() {
  cart.set([]);
  cartCount.set(0);
}

export function addQuantityToCartItem(itemId) {
  cart.update((items) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      items[itemIndex].quantity += 1;
      updateCartCount(items);
    }
    return items;
  });
}

export function removeQuantityFromCartItem(itemId) {
  cart.update((items) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1 && items[itemIndex].quantity > 1) {
      items[itemIndex].quantity -= 1;
      updateCartCount(items);
    }
    return items;
  });
}
