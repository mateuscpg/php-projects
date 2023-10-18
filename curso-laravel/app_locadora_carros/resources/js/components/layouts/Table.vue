<template>
  <div style="text-align: center;">
    <table class="table table-hover" >
      <thead>
          <tr>
            <th class="text-uppercase" scope="col" v-for="header, key in headers" :key="key">{{ header }}</th> 
          </tr>
      </thead>
      <tbody>
          <tr v-for="obj in marcas" :key="obj.id">

            <template v-for="(valor, chave) in obj">

              <td v-if="headers.includes(chave)" :key="chave" >

                <span v-if="chave === 'imagem'">
                  <img
                   :src="'/storage/'+valor" 
                   width="25" 
                   height="25"/> 
                </span>

                <span v-else>
                  {{ valor }}
                </span>

              </td>

            </template>

          </tr>
          
      </tbody>
  </table>
    
  </div>
</template>

<script>
export default {
  props: ['marcas', 'headers']

}
</script>

<style>

</style>