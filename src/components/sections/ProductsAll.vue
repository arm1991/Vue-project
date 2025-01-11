<script setup>
import BaseProduct from "../UI/BaseProduct.vue";
import { defineProps } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="products-all">
    <BaseProduct
      v-for="product in props.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss" scoped>
.products-all {
  flex: 1;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
}
</style>
