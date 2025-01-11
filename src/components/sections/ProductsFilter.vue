<script setup>
import { onMounted, ref, defineProps, defineEmits } from "vue";
import { $get } from "@/api";
import ProductsFilterItem from "./ProductsFilterItem.vue";

const emit = defineEmits(["onChange"]);
const filters = ref([]);

const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
});

const getFilters = async () => {
  try {
    const data = await $get("filters");
    filters.value = data;
  } catch (err) {
    console.error(err.message);
  }
};

const handleCheckboxClick = (filterName, value) => {
  const paramsString = props.params[filterName] || "";
  const paramsArray = paramsString ? paramsString.split(",") : [];
  const isSelected = paramsArray.includes(`${value}`);
  const type = filters.value[filterName].type;
  let updatedParmas;

  if (type === "single-select") {
    updatedParmas = isSelected ? "" : value;
  } else {
    updatedParmas = isSelected
      ? paramsArray.filter((item) => item !== value).join(",")
      : [...paramsArray, value].join(",");
  }

  const newParams = {
    ...props.params,
    [filterName]: updatedParmas,
  };

  if (updatedParmas === "") {
    delete newParams[filterName];
  }

  emit("onChange", newParams);
};

onMounted(() => {
  getFilters();
});
</script>

<template>
  <div class="products-filter">
    <ProductsFilterItem
      @onChange="handleCheckboxClick"
      v-for="filterKey in Object.keys(filters)"
      :key="filterKey"
      :filterName="filterKey"
      :filterItem="filters[filterKey]"
      :params="params"
    />
  </div>
</template>

<style lang="scss" scoped>
.products-filter {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
