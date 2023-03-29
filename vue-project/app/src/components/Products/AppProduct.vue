<template>
  <div class="card">
    {{ product.name }} - R${{ product.price }}
    <div class="botoes">
      <button @click="addProduct()">
        Adicionar ao carrinho
      </button>
      <button
          v-if="InCart"
          @click="removeProduct()">
        Remover produto
      </button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      InCart: true,
    }
  },
  props: {
    product: Object
  },
  methods: {
    addProduct() {
      this.$store.commit('addProduct', this.product);
    },
    removeProduct() {
      this.$store.commit('removeProduct', this.product.id)
    },
  }
}

</script>

<style>
.card {
  background: cornflowerblue;
  color: black;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
}
.botoes{
  display: flex;
  float: right;

}

</style>