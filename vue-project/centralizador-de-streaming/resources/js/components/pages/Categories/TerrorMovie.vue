<template>
  <div>
    <Header/>
      <div class="content">

        <div class="homepage">
          <PrincipalMovie :movies="principalMovie"></PrincipalMovie>
          <br>
          <br>
          <div class="recommended-movies">
            <div class="search">
              <h3>Filmes Recomendados</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'recommendedMovies')">
            </div>
            <MoviesSection :movies="recommendedMovies"></MoviesSection>
          </div>
          <br>
          <br>
          <div class="terror-movies">
            <div class="search">
              <h3>Filmes de Terror</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'terrorMovies')">
            </div>
            <MoviesSection :movies="terrorMovies"></MoviesSection>
          </div>
          <br>
          <br>
        </div>
        <Spinner/>
      </div>
  </div>
</template>


<script>
import Header from '../../Header/Header.vue'
import Spinner from '../../../mixins/Spinner.vue';
import MoviesSection from '../../Carousel/MoviesSection.vue';
import PrincipalMovie from '../../Carousel/PrincipalMovie.vue';
import api from '../../../services/Axios'
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
      conselho: '',
      principalMovie:[
        {id: 1, image: "https://www.publicitarioscriativos.com/wp-content/uploads/2019/08/Todos-os-po%CC%82steres-do-Universo-Cinematogra%CC%81fico-Marvel-em-alta-qualidade.png", title: "Vingadores Ultimato", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        {id: 2, image: "https://cinepop.com.br/wp-content/uploads/2022/11/avatar2_29.jpg", title: "Avatar 2", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4"},
        {id: 3, image: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/10/deadpool-2-familia.jpg", title: "Deadpool 2", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_615005a8789b18.38685020_FPpreview.mp4"},
        {id: 4, image: "https://images.cgames.de/images/gamestar/290/joker_6078890.jpg", title: "Coringa", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://v4.cdnpk.net/videvo_files/video/free/video0457/large_watermarked/_import_60bc622a5b8144.54299663_FPpreview.mp4"},
      ],

      recommendedMovies: [],
      terrorMovies: [],
    }
  },
  methods:{
    searchMovies(event, moviesCategory) {
      if (event.key === "Enter") {
        const searchQuery = event.target.value;
        console.log("Pesquisar filmes da categoria: " + moviesCategory + " com a consulta: " + searchQuery);
      }
    },
    async listMovies(){
        let dadosRecommended = await api.listRecommendedMovies();
          this.recommendedMovies = dadosRecommended;

        let dadosTerror = await api.listTerrorMovies();
          this.terrorMovies = dadosTerror;
    }
  
    
  },

  created(){
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
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/Panico-5-filmes-terror.jpg?w=876&h=484&crop=1');
  background-size: cover;
  background-attachment: fixed;
}
.homepage{
  margin-top: 84px;
  /* background-color: blue ; */
  margin-top: 5.5rem; 
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


</style>
