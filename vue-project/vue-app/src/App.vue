<template>
  <div class="conteiner grid-lg my-2 py-2 text-dark">

    <div class="card">

      <div class="card-header">

        <div class="h4">Cotação de moedas</div>

      </div>
      <div class="card-body">
        <CotacaoMoedas :quotes="quotes"/>
      </div>

    </div>

  </div>
</template>

<script>

import CotacaoMoedas from './components/CotacaoMoedas'
import api from './api'
import { onMounted, reactive, toRefs } from 'vue'

export default {
  components: {
    CotacaoMoedas
  },
  // Expor os dados da nossa API no component
  setup () {
    const data = reactive({
      quotes: {}
    })
    onMounted(async () => {
      const response = await api.all()
      data.quotes = response.data
    })
    return {...toRefs(data)}
  }
}
</script>

<style>
*{
  font-family: Lucida Console;
}
.h4{
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.card{
  display: flex;
  text-align: center;
  background-color: rgb(241, 239, 197);
  box-shadow: inset 0 0 0.5em black, 0 0 1em gold;
}
</style>
