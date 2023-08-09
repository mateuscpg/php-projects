<template>
    <div>
      <Header/>
      <div class="content">
        <div 
        class="movie-player d-flex align-center mx-auto fill-height" 
        :style="{ width: '60%'}">
          <Player :movies="movies" ></Player>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../Header/Header.vue'
  import Player from '../Player/Player.vue'
  export default {
    components: {
      Header,Player
    },
    data (){
      return{
        movies: {}
      };
    },
    created(){
      const movieId = this.$route.query.id; // Get the movie ID from the route
      const movieVideo = this.$route.query.video; // Get the movie Video from the route
      this.movies.id = movieId; 
      this.movies.video = movieVideo; 
    }
  };
  </script>
  
  <style scoped>

/* .content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100%;

}
.movie-player{
  margin-top: 84px;
  padding: 1rem 1rem;
} */
  
  </style>
  