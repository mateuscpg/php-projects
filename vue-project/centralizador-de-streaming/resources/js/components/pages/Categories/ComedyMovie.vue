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
          <div class="comedy-movies">
            <div class="search">
              <h3>Filmes de Comédia</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'comedyMovies')">
            </div>
            <MoviesSection :movies="comedyMovies"></MoviesSection>
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

      recommendedMovies: [
        { id: 1, streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' , img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 2, streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' , img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 3, streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' , img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 4, streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 5, streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 6, streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png' , img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 7, streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg' , img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 8, streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg' , img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 9, streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw' , img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 10, streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
      ],
      comedyMovies: [
      { id: 1, streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' , img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 2, streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' , img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 3, streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' , img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 4, streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 5, streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 6, streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png' , img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 7, streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg' , img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 8, streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg' , img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 9, streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw' , img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
        { id: 10, streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw' , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.", video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"},
       ],
    }
  },
  methods:{
    searchMovies(event, moviesCategory) {
      if (event.key === "Enter") {
        const searchQuery = event.target.value;
        console.log("Pesquisar filmes da categoria: " + moviesCategory + " com a consulta: " + searchQuery);
      }
    },
  
    
  },

  created(){
    
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
    url('https://segredosdomundo.r7.com/wp-content/uploads/2019/08/20-filmes-de-comedia-para-voce-chorar-de-tanto-rir-3.jpg');
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
