<template>
  <div>
    <Header/>
      <div class="content">

        <div class="homepage">
          <h3>Filmes Recomendados</h3>
          <Carousel></Carousel>
          <br>
          <!-- <h3>Filmes de Ação</h3>
          <Carousel></Carousel>
          
          <br>
          <h3>Filmes de Terror</h3>
          <Carousel></Carousel> -->
     
        </div>

      </div>
  </div>
</template>


<script>
import Header from '../Header/Header.vue'
import Carousel from '../Carousel/Carousel.vue'
export default {

  components: {
    Header,
    Carousel
  },
  data: () => ({
    
  }),
  
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  color:var(--light);
  /* background-color: var(--blue); */
}
.homepage{
  margin-top: 84px;
  /* background-color: blue ; */
  margin-top: 5.5rem; 
  margin-right:5rem;
  margin-left:5rem;
}


</style>
