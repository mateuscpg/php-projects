<template>
  <div>
    <Header/>
      <div class="content">

        <div class="principal-movies">
          <PrincipalMovie  v-if="principalMovie.length > 0" :movies="principalMovie"></PrincipalMovie>
        </div>

        <div class="homepage">


          <div class="recommended-movies">
            <div class="search">
              <h3>Filmes Recomendados</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'recommendedMovies')">
            </div>
            <MoviesSection :movies="recommendedMovies"></MoviesSection>
          </div>

          <div class="acction-movies">
            <div class="search">
              <h3>Filmes de Ação</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'acctionMovies')">
            </div>
            <MoviesSection :movies="acctionMovies"></MoviesSection>
          </div>

          <div class="adventure-movies">
            <div class="search">
              <h3>Filmes de Aventura</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'adventureMovies')">
            </div>
            <MoviesSection :movies="adventureMovies"></MoviesSection>
          </div>

          <div class="terror-movies">
            <div class="search">
              <h3>Filmes de Terror</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'terrorMovies')">
            </div>
            <MoviesSection :movies="terrorMovies"></MoviesSection>
          </div>

          <div class="romance-movies">
            <div class="search">
              <h3>Filmes de Romance</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'romanceMovies')">
            </div>
            <MoviesSection :movies="romanceMovies"></MoviesSection>
          </div>
            
        </div>

        <Spinner/>

      </div>
  </div>
</template>


<script>
import Header from '../Header/Header.vue'
import Spinner from '../../mixins/Spinner.vue';
import MoviesSection from '../Carousel/MoviesSection.vue';
import PrincipalMovie from '../Carousel/PrincipalMovie.vue';
import api from '../../services/Axios'
import axios from 'axios';
export default {

  components: {
    Header,
    PrincipalMovie,
    MoviesSection,
    Spinner,
  },
  data(){
    return{
      user: {},
      principalMovie:[],
      recommendedMovies: [],
      acctionMovies: [],
      adventureMovies: [],
      terrorMovies: [],
      romanceMovies: [],
      MovieSelected: [],
    }
  },
  methods:{
   async searchMovies(event, moviesCategory) {
      if (event.key === "Enter") {
        const searchQuery = event.target.value;
        let dados = await api.searchMovies(moviesCategory, searchQuery);
        this.MovieSelected = dados.movie;
        console.log(this.MovieSelected);
        console.log("Pesquisar filmes da categoria: " + moviesCategory + " com a consulta: " + searchQuery);
      }
    },
    async dadosUsuario(){
      try {
        let dados = await api.getPerfil();
        this.user = dados;
      }
      catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    },
    async listMovies(){
      try{
        let dadosPrincipal = await api.listPrincipalMovies();
        this.principalMovie = dadosPrincipal;

        let dadosRecommended = await api.listRecommendedMovies();
        this.recommendedMovies = dadosRecommended;

        let dadosAcction = await api.listAcctionMovies();
        this.acctionMovies = dadosAcction;

        let dadosAdventure = await api.listAdventureMovies();
        this.adventureMovies = dadosAdventure;

        let dadosTerror = await api.listTerrorMovies();
        this.terrorMovies = dadosTerror;

        let dadosRomance = await api.listRomanceMovies();
        this.romanceMovies = dadosRomance;
      }
      catch (error) {
        console.error("Filme não encontrado!", error);

      }

    },
 
  },

  created(){
    this.dadosUsuario();
    this.listMovies();

  }
  
 
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
.principal-movies{
  /* z-index: 1; */
  margin-right:8rem;
  margin-left:8rem;

}
.homepage{
  margin-right:8rem;
  margin-left:8rem;
}
.search{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
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
.acction-movies, .adventure-movies,
.terror-movies, .romance-movies{
  padding-top: 4rem;
}


</style>
