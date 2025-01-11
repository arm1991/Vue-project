<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import { $get } from "@/api";
import { filterDataByParams } from "@/helpers";
import ProductsAll from "@/components/sections/ProductsAll.vue";
import ProductsFilter from "@/components/sections/ProductsFilter.vue";

const products = ref([]);

const router = useRouter();
const params = computed(() => router.currentRoute.value.query);

const chnageParams = (newParams) => {

  router.push({
    query: {
      ...newParams,
    },
  });
};

const getProducts = async () => {
  try {
    const data = await $get("products");
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

const fetchAndFilterProducts = async (params) => {
  const fetchedProducts = await getProducts();

  const data = [...filterDataByParams(fetchedProducts, Object.entries(params))];
  products.value = data;
};

watch(
  () => router.currentRoute.value.query,
  (newQuery) => {
    fetchAndFilterProducts(newQuery);
  },
  { immediate: true }
);

onMounted(() => fetchAndFilterProducts(params.value));
</script>

<template>
  <div class="products-page">
    <h1 class="products-page__title">Products</h1>
    <div class="products-page__content">
      <ProductsFilter @onChange="chnageParams" :params="params" />
      <ProductsAll :products="products" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-page {
  padding: 40px 60px;

  &__title {
    text-align: center;
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
  }
}
</style>
