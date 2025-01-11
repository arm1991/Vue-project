<template>
  <header class="header">
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__list-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="header-nav__list-item">
          <RouterLink to="/products">Products</RouterLink>
        </li>
        <li class="header-nav__list-item">
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &-nav {
    padding: 40px 60px;
    &__list {
      list-style-type: none;
      display: flex;
      gap: 24px;

      &-item {
        font-size: 20px;
        color: black;

        > a {
          text-decoration: none;

          &:visited {
            color: black;
          }

          &:hover {
            color: gray !important;
          }
        }
      }
    }
  }
}
</style>
