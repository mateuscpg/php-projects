<template>
   
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="button-prev">
                    <button @click="prevMovie">
                        <span class="material-icons">arrow_back_ios</span>
                </button>
            </div>
                <VueAIcarousel 
                :Property="{
                    ID: 'One',
                    Dlay:50000,
                    NavBtn: 'naveBtnStyle',   
                    CountPos: 'CounterPosition', 
                    CounterStyle: 'counterNewStyle', 
                    CounterActiveStyle: 'CAnewStyle', 
                }"
                
                >
                    <div v-for="movie in visibleMovies"
                    :key="movie.id" 
                    class="NewCards"
                    @mouseover="onCardMouseOver(movie)"
                    @mouseleave="onCardMouseLeave(movie)"
                    >
                    
                    <div class="card" >
                        <div class="img">
                            <img 
                            height="200"
                            width="240"
                            :src="movie.img" 
                            alt="movieimg"
                            >
                        </div>
                        <div class="title">
                            <h5>
                            {{ movie.title }}
                            </h5>
                        </div>
                    </div>
                    </div>
                </VueAIcarousel>
                <div class="button-next">
                    <button @click="nextMovie">
                        <span class="material-icons">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        </div>

</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
export default {
    components: {VueAIcarousel},
    data (){
        return{
            movies: [
                {img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1"},
                {img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2"},
                {img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5"},
                {img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6"},
                {img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7"},
                {img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8"},
                {img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10"},
            ],
            visibleMovies: [], // Displayed movies in the carousel
            currentMovieIndex: 0, // Index of the currently displayed movie
            moviesPerPage: 7,

        }
    },
    methods: {
    // Method to update the visibleMovies array based on the currentMovieIndex
    updateVisibleMovies() {
      this.visibleMovies = this.movies.slice(
        this.currentMovieIndex,
        this.currentMovieIndex + this.moviesPerPage
      );
    },
    nextMovie() {
      this.currentMovieIndex += this.moviesPerPage;
      if (this.currentMovieIndex >= this.movies.length) {
        this.currentMovieIndex = 0;
      }
      this.updateVisibleMovies();
    },
    prevMovie() {
      this.currentMovieIndex -= this.moviesPerPage;
      if (this.currentMovieIndex < 0) {
        this.currentMovieIndex = Math.max(
          this.movies.length - this.moviesPerPage,
          0
        );
      }
      this.updateVisibleMovies();
    },
  },
  
    mounted(){
        this.updateVisibleMovies();
    }
}
</script>

<style scoped>
/* Your styles here */
.carousel-container {
  overflow: hidden;
}

.carousel-wrapper {
    display: flex;
}
.NewCards {
  height: 240px;
  width: 240px;
  background-color: rgba(85, 85, 85, 0.8);
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
}
.img {
  margin: 0;
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
}
.title {
  margin: 0;
  padding-top: 1rem; 
  text-align: center; /* Centraliza o texto horizontalmente */
  color: var(--light);
  background-color: rgba(85, 85, 85, 0.8);
}

.button-prev,
.button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 27.5%;
    transform: translateY(-50%);
    width: 45px;
    /* height: 200px; */
    padding: 6.7rem 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.button-prev {
  left: 75px;
}

.button-next {
  right: 75px;
}

.button-container {
  display: flex;
  padding: 0.5em;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: space-between;
  margin: 20px;
}
.button-prev .material-icons,
.button-next .material-icons {
  color: white;
}



</style>