<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
      <p>AQUI É A PÁGINA DE VENDAS</p>
    </template>  
  </DashboardComponent>
</template>
<script>
import DashboardComponent from '../components/DashboardComponent.vue'

export default{
  name: 'SalesView',
  components: {
    DashboardComponent,
  }

}
</script>

<style>
</style>