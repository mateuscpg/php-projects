<template>

  <DashboardComponent>
    <template v-slot:slot-pages>
     <header class="title-pages">
      <p>AQUI É A PÁGINA DE PRODUTOS</p>
    
    </header>
    
    </template>  
  </DashboardComponent>

</template>
<script>
import DashboardComponent from '../components/DashboardComponent.vue'

export default{
  name: 'ProductsView',
  components: {
    DashboardComponent,
  }

}
</script>

<style lang="scss" src="../assets/scss/styledashboard.scss"></style>