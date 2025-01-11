<script setup>
import CartCheckout from "@/components/sections/CartCheckout.vue";
import CartProducts from "@/components/sections/CartProducts.vue";
</script>

<template>
  <div class="cart-page">
    <CartProducts />
    <CartCheckout />
  </div>
</template>

<style lang="scss" scoped>
.cart-page {
  padding: 40px 60px;
  display: flex;
  gap: 50px;
}
</style>
