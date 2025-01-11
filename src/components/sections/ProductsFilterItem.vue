<script setup>
import BaseCheckbox from "../UI/BaseCheckbox.vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["onChange"]);
const props = defineProps({
  filterItem: {
    type: Object,
    required: true,
  },
  filterName: {
    type: String,
    required: true,
  },
  params: {
    type: Object,
    required: true,
  },
});

const handleOnchange = (value) => {
  emit("onChange", props.filterName, value);
};
</script>

<template>
  <div
    class="products-filter__item"
    v-if="filterItem.label !== 'Colors' && filterItem.label !== 'Price'"
  >
    <span>{{ filterItem.label }}</span>
    <div class="products-filter__item-values">
      <BaseCheckbox
        v-for="value in filterItem.values"
        @onChange="handleOnchange"
        :key="value"
        :value="value"
        :checked="
          params[filterName] ? params[filterName].includes(value) : false
        "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-filter__item {
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;

  &-values {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
