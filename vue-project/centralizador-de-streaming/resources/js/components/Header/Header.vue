<template>
  <header class="header">
    <div class="buttons-container">
      
      <!-- <h3 style="color: var(--blue);">STREAMING</h3> 
      <h3 style="color: var(--pink);">CENTRALIZER</h3> -->

      <div class="right-container">

        <div href="#" class="icon-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        
        <input class="header-search" type="search" placeholder="Pesquise o filme" @keypress="searchMovies($event)">
        <button class="sair-button" @click="redirectToLogin">Sair</button>
        
        
      </div>
  </div>
  </header>
  
  <div class="results" v-if="results == true">
    <ul class="list-group list-group-flush" v-if="MovieSelected.length > 0">
      <div class="d-flex justify-content-end">
        <button type="button" @click="closeResult" class="btn-close btn-close-white mb-2 mt-1 mr-1" aria-label="Close"></button>
      </div>
          <li class="list-group-item " v-for="movie in MovieSelected" :key="movie.id" @click="openInfoMovie(movie)">
            <div class="movie-title">{{ movie.title }}</div>
            <img class="streaming-logo" :src="movie.streaming_logo" alt="">
          </li>
      </ul>
  </div>
  
</template>

<script>
import api from '../../services/Axios';

import { USER_COLLECTION } from '../../collection';
export default {

  data(){
    return{
      MovieSelected: [],
      results: true,

    }
  },
  methods: {
    closeResult(){
      this.results = false;
    },
    redirectToLogin() {
      localStorage.setItem(USER_COLLECTION,JSON.stringify({...this.user,isUserLoggedIn:false }));
      window.location.href ='/sair';
    },
    async searchMovies(event) {
      if (event.key === "Enter") {
        const searchQuery = event.target.value;
        try {
          let dados = await api.searchMovies(searchQuery);
          this.MovieSelected = dados.movie;
          this.results = true;
          console.log(this.MovieSelected);
          console.log("Pesquisar filmes com a consulta: " + searchQuery);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      }
    },
    openInfoMovie(movie) {
      console.log("O id desse filme é o id: " + movie.id );
      this.$router.push('/show-movie/'+movie.id);
    },
  },
};
</script>


<style scoped>
.header {
  width: 100%;
  /* display: flex; */
  align-items: center;
  position: fixed;
  padding: 22px;
  background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0.3));
  z-index: 3;
}

.results{
  width: 244px;
  position: fixed;
  right: 0;
  margin-right: 8rem;
  margin-top: 5.2rem;
  z-index: 2;
}

.list-group{
  background-color: rgba(39, 39, 47, 0.9 );
  outline: 1px solid var(--blue);
  border-radius: 4px;
  
}
.list-group-item{
  background-color: transparent;
  display: flex;
  /* justify-content: cenb  ter; */
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.movie-title {
  padding-right: 20px;
  /* font-size: 18px; */
  font-weight: 2px;
  color: var(--light);
}

.streaming-logo{
  width: 20px; 
  height: 20px; 
  border-radius: 50%;
  position: absolute;
  right: 0.5rem;
  z-index: 2;

}

.right-container {
  display: flex;
  align-items: center;
  justify-content:right;
}

.header-search {
  padding: 8px 25px;
  background-color: transparent;
  outline: 1px solid #00aacd;
  border: none;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}

.icon-search {
  color: white;
  margin-right: 6px;
}
.header-search{
  margin-right: 8px ;
}

.sair-button {
  padding: 6px 35px;
  background-color: transparent;
  border-radius: 2px;
  outline: 1px solid #00aacd;
  color: #fff;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}

.sair-button:hover {
  background-color: #00aacd;
  outline: 1px solid #fff;
  color: #17161b;
}
</style>
