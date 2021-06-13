<template>

  <div>
    <div>
      <h4>{{produto.nome}}</h4>
      <h6>{{produto.categoria}}</h6>
      <h5>R$ {{produto.preco}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    produto: Object,
  },
};
</script>