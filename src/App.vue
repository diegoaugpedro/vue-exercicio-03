<template>
  <div id="app">
    <Nav titulo="CADASTRO DE PRODUTOS - UPDATE - Exercício 03" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>