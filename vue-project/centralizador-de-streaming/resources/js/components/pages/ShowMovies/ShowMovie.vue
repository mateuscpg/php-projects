<template>
    <div>
      <Header/>
      <div class="content">

        <div class="image-overlay" v-if="showCard">
            <div class="movie-info">
              <div class="movie-title">
                <h1>{{ movies.title }}</h1>
              </div>
              <div class="movie-description">
                <h3>Descrição:</h3>
                <p>{{ movies.description }}</p>
              </div>
              <div class="button-container">
                <button class="play-button" @click="disabledCard()">
                  <span class="material-icons">play_arrow</span>Play</button>
                <button class="info-button" @click="cancelMovie()">Voltar</button>
              </div>
            </div>
          </div>

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
        movies: {},
        showCard: true,
      };
    },
    methods: {
    async getMovies(id_movie){
      let dados = await api.getMovie(id_movie);
        this.movies = dados.movie;

    },  

    disabledCard() {
      this.showCard = false; 

    },
    cancelMovie() {
      this.$router.push('/home');
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
.image-overlay {
  position: absolute;
  top: 0;
  left: 8rem;
  width: 45%; /* Adjust the width of the overlay to fit your needs */
  height: 100%;
  background: linear-gradient(to right, black, rgba(0, 0, 0, 0.0)); /* Less transparent on the right */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
}
/* .movie-info { */
  /* text-align: center; */
/* } */
.movie-title h1 {
  font-size: 80px;
  text-align: center;
  margin-top: 2rem;
}
.movie-description p{
  color: #c5c5c5;
}
.button-container{
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.play-button,
.info-button {
  font-size: 20px;
  padding: 0.4rem 1.2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.play-button {
  color: black;
  background-color: white;
}

.info-button {
  color: #fff;
  background-color: rgba(128, 128, 128, 0.5);
  position: relative; /* Add position relative to enable pseudo-element positioning */
}
.play-button:hover{
outline: 2px solid #ccc;
}
.info-button:hover{
  outline: 2px solid #fff;
}
  
  </style>
  