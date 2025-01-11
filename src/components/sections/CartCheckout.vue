<script setup>
import { useCartStore } from "@/store";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { totalPrice } = storeToRefs(store);

const handleClick = () => {
  store.clearCart();
};
</script>

<template>
  <div class="cart-checkout">
    <h3 class="cart-checkout">Total: {{ totalPrice }}$</h3>
    <button @click="handleClick">Clear Cart</button>
  </div>
</template>

<style lang="scss" scoped>
.cart-checkout {
  display: flex;
  flex-direction: column;
}
</style>
