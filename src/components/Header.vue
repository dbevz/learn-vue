<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <!-- <a href="/">
          <img src="" alt="">
        </a> -->
      </div>
      <nav class="header__navigation navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/catalogue">Catalogue</router-link>
        <router-link to="/faq">FAQ</router-link>
      </nav>
      <div class="header__cart cart">

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
}
</script>

<style scoped>

</style>
