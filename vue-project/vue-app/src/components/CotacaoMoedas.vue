<template>
 <div class="table">

  <thead>
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Máximo</th>
      <th>Mínimo</th>
      <th>Variação</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(quote, key) in quotes" :key="key">

      <td>{{ key }}</td>
      <td>{{ quote.name }}</td>
      <td>{{ quote.high }}</td>
      <td>{{ quote.low }}</td>
      <td>
        <span class="label label-rounded text-small"
        :class="getClass(quote)">
        {{ quote.pctChange }} %
      </span>
    </td>

    </tr>
  </tbody>

 </div>

</template>

<script>
export default {
  props: {quotes: {type: Object, required: true}},
  name: 'CotacaoMoedas',
  data () {
    return {

    }
  },
  methods: {
    getClass (quote) {
      if (quote.pctChange < 0) {
        return 'p-1 bg-danger rounded text-white'
      } else if (quote.pctChange > 0) {
        return 'p-1 bg-success rounded text-white'
      } else {
        return 'p-1 bg-light rounded text-black'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
