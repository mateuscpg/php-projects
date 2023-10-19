<template>
  <div style="text-align: center;">
    <table class="table table-hover" >
      <thead>
          <tr>
            <th scope="col" v-for="header, key in headers" :key="key">{{ header.titulo }}</th> 
            <th v-if="visualizar || atualizar || excluir"></th>
          </tr>
      </thead>
      <tbody>

        <tr v-for="obj, chave in dadosFiltrados" :key="chave">

          <td v-for="valor, chaveValor in obj" :key="chaveValor">
            <span v-if="headers[chaveValor].tipo == 'text'">  {{ valor }} </span>
            <span v-if="headers[chaveValor].tipo == 'data'">  {{ new Date(valor).toLocaleDateString() }} </span>
            <span v-if="headers[chaveValor].tipo == 'imagem'"> 
            <img :src="'/storage/' + valor" width="30" height="30"> 
            </span>
          </td>

          <td v-if="visualizar || atualizar || excluir">
            <button type="submit" v-if="visualizar" class="btn btn-outline-success btn-sm" @click="functionVisualizar()">Visualizar</button>
            <button type="submit" v-if="atualizar" class="btn btn-outline-primary btn-sm" @click="functionAtualizar()">Atualizar</button>
            <button type="submit" v-if="excluir" class="btn btn-outline-danger btn-sm" @click="functionExcluir()">Excluir</button>
          </td>

        </tr>

      </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
  props: ['marcas', 'headers', 'visualizar','atualizar', 'excluir'],
  data(){
    return{

    }
  },
  methods:{
    functionVisualizar(){
      console.log("visualizar");
    },
    functionAtualizar(){
      console.log("atualizar");
    },
    functionExcluir(){
      console.log("excluir");
    },
  },
  computed: {
    dadosFiltrados(){
      let campos = Object.keys(this.headers);
      let dadosFiltrados = [];

      this.marcas.map((item, chave) => {

        let itemFiltrado = {};
        campos.forEach(campo => {
          itemFiltrado[campo] = item[campo]; //Utilizar sintaxe de array para atribuir valores a objetos
          
        })
        dadosFiltrados.push(itemFiltrado)
      })

      return dadosFiltrados; //Retorne um array de objetos
    }
  },
}
</script>

<style>

</style>