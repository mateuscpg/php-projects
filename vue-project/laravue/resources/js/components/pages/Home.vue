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
          <div class="acction-movies">
            <div class="search">
              <h3>Filmes de Ação</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'acctionMovies')">
            </div>
            <MoviesSection :movies="acctionMovies"></MoviesSection>
          </div>
          <br>
          <br>
          <div class="adventure-movies">
            <div class="search">
              <h3>Filmes de Aventura</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'adventureMovies')">
            </div>
            <MoviesSection :movies="adventureMovies"></MoviesSection>
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
          <div class="romance-movies">
            <div class="search">
              <h3>Filmes de Romance</h3>
              <input class="header-search" type="search" placeholder="Pesquise" @keypress="searchMovies($event, 'romanceMovies')">
            </div>
            <MoviesSection :movies="romanceMovies"></MoviesSection>
          </div>
            
        </div>

      </div>
  </div>
</template>


<script>
import Header from '../Header/Header.vue'
import MoviesSection from '../Carousel/MoviesSection.vue';
import PrincipalMovie from '../Carousel/PrincipalMovie.vue';
export default {

  components: {
    Header,
    PrincipalMovie,
    MoviesSection
  },
  data(){
    return{
      principalMovie:[
        {id: 1, img: "https://www.publicitarioscriativos.com/wp-content/uploads/2019/08/Todos-os-po%CC%82steres-do-Universo-Cinematogra%CC%81fico-Marvel-em-alta-qualidade.png", title: "Filme 1", description: "Uma descrição qualquer"},
        {id: 2, img: "https://cinepop.com.br/wp-content/uploads/2022/11/avatar2_29.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        {id: 3, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/10/deadpool-2-familia.jpg", title: "Filme 3", description: "Uma descrição qualquer"},
        {id: 4, img: "https://images.cgames.de/images/gamestar/290/joker_6078890.jpg", title: "Filme 4", description: "Uma descrição qualquer"},
      ],

      recommendedMovies: [
        { id: 1, img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "Uma descrição qualquer"},
        { id: 2, img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        { id: 3, img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "Uma descrição qualquer"},
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "Uma descrição qualquer"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "Uma descrição qualquer"},
        { id: 6, img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "Uma descrição qualquer"},
        { id: 7, img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "Uma descrição qualquer"},
        { id: 8, img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "Uma descrição qualquer"},
        { id: 9, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "Uma descrição qualquer"},
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "Uma descrição qualquer"},
      ],
      acctionMovies: [
        { id: 1, img: "https://s2.glbimg.com/uYRv1HsL0I1mVRHxND5W6_b5R4E=/620x413/top/e.glbimg.com/og/ed/f/original/2019/03/20/mv5bndjjmtqzm2mtnteyzs00y2filwi1ngmtmmy0m2y5yjrimwu1xkeyxkfqcgdeqxvynjk3nju0ndy._v1_sx1777_cr001777999_al_.jpg", title: "Filme 1", description: "Uma descrição qualquer"},
        { id: 2, img: "https://img.wallpapic-br.com/i6762-343-437/medium/tomb-raider-filmes-poster-filme-de-acao-imagem-de-fundo.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz-uo4bncM9B2I_WWWRB3TyDEvDnlkoupsKmZ8BI5WZMJMLdzn6uu6Ry8c1TaZ795c2s&usqp=CAU", title: "Filme 3", description: "Uma descrição qualquer"},
        { id: 4, img: "https://static1.purebreak.com.br/articles/0/10/24/20/@/425265-tambem-ha-filmes-de-acao-natalinos-e-d-700x700-2.jpg", title: "Filme 4", description: "Uma descrição qualquer"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgrywbDSAChA7In3ejJleDRF7jyJ3BZhTrw&usqp=CAU", title: "Filme 5", description: "Uma descrição qualquer"},
        { id: 6, img: "https://br.web.img3.acsta.net/pictures/210/140/21014018_2013061921374075.jpg", title: "Filme 6", description: "Uma descrição qualquer"},
        { id: 7, img: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/99/1099133_capitao-america-guerra-civil-filme-acao-ms_m1_637383523771667202.jpg", title: "Filme 7", description: "Uma descrição qualquer"},
        { id: 8, img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "Uma descrição qualquer"},
        { id: 9, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "Uma descrição qualquer"},
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "Uma descrição qualquer" },
      ],
      adventureMovies: [
        { id: 1, img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "Uma descrição qualquer"},
        { id: 2, img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        { id: 3, img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "Uma descrição qualquer"},
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "Uma descrição qualquer"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "Uma descrição qualquer"},
        { id: 6, img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "Uma descrição qualquer"},
        { id: 7, img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "Uma descrição qualquer"},
        { id: 8, img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "Uma descrição qualquer"},
        { id: 9, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "Uma descrição qualquer"},
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "Uma descrição qualquer" },
      ],
      terrorMovies: [
        { id: 1, img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "Uma descrição qualquer"},
        { id: 2, img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        { id: 3, img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "Uma descrição qualquer"},
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "Uma descrição qualquer"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "Uma descrição qualquer"},
        { id: 6, img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "Uma descrição qualquer"},
        { id: 7, img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "Uma descrição qualquer"},
        { id: 8, img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "Uma descrição qualquer"},
        { id: 9, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "Uma descrição qualquer"},
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "Uma descrição qualquer" },
      ],
      romanceMovies: [
        { id: 1, img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", title: "Filme 1", description: "Uma descrição qualquer"},
        { id: 2, img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg", title: "Filme 2", description: "Uma descrição qualquer"},
        { id: 3, img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", title: "Filme 3", description: "Uma descrição qualquer"},
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", title: "Filme 4", description: "Uma descrição qualquer"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", title: "Filme 5", description: "Uma descrição qualquer"},
        { id: 6, img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png", title: "Filme 6", description: "Uma descrição qualquer"},
        { id: 7, img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png", title: "Filme 7", description: "Uma descrição qualquer"},
        { id: 8, img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", title: "Filme 8", description: "Uma descrição qualquer"},
        { id: 9, img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", title: "Filme 9", description: "Uma descrição qualquer"},
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", title: "Filme 10", description: "Uma descrição qualquer" },
      ],
    }
  },
  methods:{
    searchMovies(event, moviesCategory) {
      if (event.key === "Enter") {
        const searchQuery = event.target.value;
        console.log("Pesquisar filmes da categoria: " + moviesCategory + " com a consulta: " + searchQuery);
      }
      }
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
