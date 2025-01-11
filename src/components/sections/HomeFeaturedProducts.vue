<script setup>
import { $get } from "@/api";
import { onMounted, ref } from "vue";
import BaseProduct from "../UI/BaseProduct.vue";

const products = ref([]);

const getData = async () => {
  try {
    const data = await $get("products");
    products.value = data.filter((item) => item.isFeatured).slice(0, 4);
  } catch (err) {
    console.error(err.message);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <section class="featured-products">
    <h2 class="featured-products__title">Featured Products</h2>
    <div class="featured-products__item">
      <BaseProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.featured-products {
  padding: 40px 60px;

  &__title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
  }

  &__item {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
}
</style>
