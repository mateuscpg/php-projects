<template>
  <div>
    <Header/>
    <div class="content">
      <div class="homepage">
        This is a Home page
        <div class="card-principal">
          CARD PRINCIPAL
        </div>
        <div class="card-secundario">
          CARD SECUNDÁRIO
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
import Header from '../Header/Header.vue'
export default {

  components: {
    Header
  },
  data() {
    return {

    };
  },
  
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100%;
  color:var(--light);
  background-color: var(--blue);
}
.homepage{
  margin-top: 84px;
  background-color: blue ;
  padding: 1rem 48rem;
}
.card-principal{
  
}
.card-secundario{
  
}

</style>
