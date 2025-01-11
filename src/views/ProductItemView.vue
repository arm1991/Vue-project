<script setup>
import { $get } from "@/api";
import AddToCartButton from "@/components/UI/AddToCartButton.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);
const id = route.params.id;

const getData = async (id) => {
  try {
    const data = await $get("products", id);
    product.value = data;
  } catch (err) {
    console.error(err.message);
  }
};

onMounted(() => {
  getData(id);
});
</script>

<template>
  <div class="product-item-page">
    <div class="product-item__img">
      <img :src="product?.thumbnail" alt="" />
    </div>
    <h2 class="product-item__title">{{ product?.name }}</h2>
    <p class="product-item__desc">{{ product?.description }}</p>
    <p class="product-item__price">
      <strong>{{ product?.price }}$</strong>
    </p>
    <AddToCartButton :product="product" />
  </div>
</template>

<style lang="scss" scoped>
.product-item-page {
  padding: 40px 60px;
  display: flex;
  gap: 50px;
}
</style>
