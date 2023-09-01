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
  import Header from '../../Header/Header.vue'
  import Player from '../../Player/Player.vue'
  import api from '../../../services/Axios'

  export default {
    components: {
      Header,Player
    },
    data (){
      return{
        movies: {}
      };
    },
    methods:{
      async getMovies(id_movie){
      let dados = await api.getMovie(id_movie);
        this.movies = dados.movie;

    },  
  },
    watch:{
      '$route.params.id_movie': function (valor) {this.getMovies(valor)} 
    },
    created(){
      let id_movie =this.$route.params.id_movie;
      this.getMovies(id_movie);
    },
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
  