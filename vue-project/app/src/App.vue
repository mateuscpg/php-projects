<template>
  <div class="valorCarrinho">
    {{ 'O preço do meu carrinho é de: R$' }}
    {{ $store.getters.total }}

  </div>

  <div class="marketingplace">
    <h2>MARKETING PLACE</h2>
  </div>
  <AppProducts/>
  <br><br>
  <br><br>
{{$store.state.user.first_name}}  {{$store.state.user.last_name}}

  <br><br>
  <button @click="updateUser()">
    Atualizar perfil
  </button>
    <pre>
      {{$store.state.cart}}
    </pre>

  <br><br>


</template>

<script>


import AppProducts from "@/components/Products/AppProducts.vue";

export default {
  name: 'App',
  components: {
    AppProducts,
  },
  data() {
    return {
    }
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Mateus',
        last_name: 'Correia',
        email: 'mateus@gmail.com'
      }
      // this.$store.commit('storeUser', newUser)
      this.$store.dispatch('storeUser', newUser).then(()=>{
        console.log('terminou');
      });
    }
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px;
}

.marketingplace {
  background-color: black;
  color: white;
  font-family: Calibri;
  border-radius: 6px;
  padding: 2px;
}

.valorCarrinho {
  background-color: #42b983;
  padding: 6px;
  border-radius: 6px;
  margin-bottom: 5px;
}

</style>
