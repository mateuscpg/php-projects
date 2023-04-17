<template>
<DashboardComponent >
    <template v-slot:slot-pages>
      <p>AQUI É A HOME/INÍCIO</p>
    </template>  

</DashboardComponent>
</template>

<script>
import DashboardComponent from '../components/DashboardComponent.vue'

export default {
  name: 'HomeView',
  components:{
    DashboardComponent,
  }

  }
</script>
