<script setup>
import LayoutFooter from "@/components/LayoutFooter.vue";
import LayoutHeader from "@/components/LayoutHeader.vue";
</script>

<template>
  <LayoutHeader />
  <slot></slot>
  <LayoutFooter />
</template>
