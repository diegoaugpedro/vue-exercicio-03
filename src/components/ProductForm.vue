<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <div>
        <label for="nome"><strong>PRODUTO</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="nome"
          placeholder="Digite o nome do Produto"
        />
        <small><strong>{{isProductNameLimitExceeded}}</strong></small>
      </div>
      <div>
        <label for="nome"><strong>PREÇO</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="preco"
          placeholder="Digite o preço do Produto"
        />
      </div>
      <div>
        <label for="nome"><strong>CATEGORIA</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="categoria"
          placeholder="Digite a categoria do Produto"
        />
      </div>
      <nav>
        <ol>
          <li>
            <strong>Produto:</strong> {{ nome }} <br/> 
            <strong>Preço:</strong> {{ preco }} <br/> 
            <strong>Categoria:</strong> {{ categoria }}
          </li>
        </ol>
      </nav>
      <button type="submit">CADASTRAR</button>
      <div>
        <router-link to="/produtos">LISTA DE PRODUTOS</router-link>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      nome: "",
      preco: "",
      categoria: "",
      isProductNameLimitExceeded: "",
      produtos: [],
    };
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch('addProduto', { nome: this.nome, preco: this.preco, categoria: this.categoria });
      console.log(this.$store.state.produtos);
    },
    handleOnAddProduct(produto) {
      this.produtos = this.produtos.concat(produto);
    },
  },
  watch: {
      nome(){
          if(this.nome.length > 25){
              this.isProductNameLimitExceeded = "Nome do produto tem o limite de 25 caracteres"
          } else {
              this.isProductNameLimitExceeded = ""
          }
      }
  }
};
</script>