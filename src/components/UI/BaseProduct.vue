<script setup>
import AddToCartButton from "./AddToCartButton.vue";
import { defineProps } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

// eslint-disable-next-line
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const navigateToProduct = () => {
  const id = props.product.id;
  router.push({ name: "product-item", params: { id } });
};
</script>

<template>
  <div class="product">
    <div class="product-img" @click="navigateToProduct">
      <img :src="product.thumbnail" alt="" />
    </div>
    <h4 class="product-title" @click="navigateToProduct">{{ product.name }}</h4>
    <p class="product-desc">{{ product.description }}</p>
    <div class="product-bottom">
      <p class="product-price">
        <strong>{{ product.price }}$</strong>
      </p>
      <AddToCartButton :product="product" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 20px;
  border: 1px solid;
  border-radius: 18px;
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  &-img {
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    > img {
      display: block;
      width: 100%;
    }
  }

  &-title {
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }

  &-bottom {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
