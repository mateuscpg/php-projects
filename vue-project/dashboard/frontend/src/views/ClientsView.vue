<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
      <p>PÁGINA DE CLIENTES</p>
    </template>  
  </DashboardComponent>
</template>
<script>
import DashboardComponent from '../components/DashboardComponent.vue'

export default{
  name: 'ClientsComponent',
  components: {
    DashboardComponent,
  }

}
</script>

<style>
</style>