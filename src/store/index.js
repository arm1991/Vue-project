import { defineStore } from "pinia";

const initalState = {
  cartItems: [],
};

export const useCartStore = defineStore("cart", {
  state: () => ({ ...initalState }),

  getters: {
    totalPrice() {
      return this.cartItems
        .reduce((acc, cur) => acc + cur.price * cur.count, 0)
        .toFixed(2);
    },
  },

  actions: {
    addToCart(item) {
      const cartItem = this.cartItems.find((obj) => obj.id === item.id);

      if (cartItem) {
        cartItem.count++;
      } else {
        this.cartItems.push({ ...item, count: 1 });
      }
    },

    removeFromCart(item) {
      const cartItem = this.cartItems.find((obj) => obj.id === item.id);

      if (cartItem.count > 1) {
        cartItem.count--;
      } else {
        this.cartItems = this.cartItems.filter((obj) => obj.id !== item.id);
      }
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});
