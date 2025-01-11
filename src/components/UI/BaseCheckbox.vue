<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["onChange"]);
const itemId = Math.random() * 1000 + Date.now();

const handleCheckboxChange = () => {
  emit("onChange", props.value);
};
</script>

<template>
  <div class="checkbox-parent">
    <input
      @change="handleCheckboxChange"
      :checked="checked"
      type="checkbox"
      :name="value"
      :id="itemId"
    />
    <label :for="itemId">{{ value }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-parent {
  display: flex;
  align-items: center;
  gap: 12px;

  > * {
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
}
</style>
