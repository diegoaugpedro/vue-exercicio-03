<template>
  <nav class="navbar">
    <span class="navbar-item">{{titulo}}</span>
  </nav>
</template>

<script>
export default {
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
nav {
    margin-bottom: 15px;
}
</style>