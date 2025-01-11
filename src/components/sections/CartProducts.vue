<script setup>
import { useCartStore } from "@/store";
import { storeToRefs } from "pinia";
import CartProductItem from "../UI/CartProductItem.vue";

const store = useCartStore();
const { cartItems } = storeToRefs(store);
</script>

<template>
  <div class="cart-products">
    <CartProductItem
      v-for="product in cartItems"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss" scoped>
.cart-products {
  flex: 1;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
}
</style>
