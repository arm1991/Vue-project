<script setup>
import { defineProps } from "vue";
import { useCartStore } from "@/store";

const store = useCartStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const handleClick = () => {
  store.removeFromCart(props.product);
};
</script>

<template>
  <button @click="handleClick" class="cart-btn">-</button>
</template>

<style lang="scss" scoped>
.cart-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgb(139, 66, 142);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(157, 88, 159);
  }

  &:active {
    background-color: rgb(189, 101, 192);
  }
}
</style>
