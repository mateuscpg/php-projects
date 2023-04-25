<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
    
      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'" :qtd="'7590'"/>
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="'350'"/>
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :qtd="'270'"/>
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Relatórios'" :percentage="'25%'" :icon="'fa-chart-bar'" :qtd="'30'"/>
          </div>

        </div>
      </div>

      <div class=" mt-5 ">
        <div class="row">
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Clientes" :columns="['Nome','Email']" />
            </div>
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Produtos" :columns="['Nome','Valor']"/>
            </div>
        </div>
    </div>

    </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../components/DashboardComponent.vue";
import CardsComponent from "../components/CardsComponent.vue"
import ListsComponent from "../components/ListsComponent.vue"


const axios = require("axios");

export default {
  name: "HomeView",
  data() {
    return{
      users: []
    }
  },
  mounted(){
     this.getUsers();
  },
  methods:{
    async getUsers(){
      let response = await axios.get('http://localhost:8000/api/'); 
      if(response.status == 200){
       this.users = response.data;
      }else{
        console.error("Ocorreu um erro na API");
      }
    }

  },

  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent
  },
};
</script>

<style lang="scss" src="../assets/scss/styledashboard.scss"></style>
