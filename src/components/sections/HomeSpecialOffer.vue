<template>
  <section class="special-offer">
    <h2 class="special-offer__title">Special Offer</h2>
    <div class="special-offer__products">
      <BaseProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { $get } from "@/api";
import BaseProduct from "../UI/BaseProduct.vue";

const products = ref([]);

const get = async () => {
  try {
    const data = await $get("products");
    products.value = data.filter((item) => item.specialOffer).slice(0, 6);
  } catch (err) {
    console.error(err.message);
  }
};

onMounted(() => {
  get();
});
</script>

<style lang="scss" scoped>
.special-offer {
  padding: 40px 60px;

  &__title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 40px;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;

    > div {
      max-width: 100%;
    }
  }
}
</style>
