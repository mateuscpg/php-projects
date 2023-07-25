<template>
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
        <div v-for="object in objects" :key="object.id" class="NewCards">
            <div class="img">
                <img height="150" width="240" :src="object.img" alt="">
            </div>
            <div class="tittle">
                <h5>
                  {{ object.tittle }}
                </h5>
            </div>
        </div>
    </VueAIcarousel>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
export default {
    components: {VueAIcarousel},
    data (){
        return{
            objects: [
                {img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg", tittle: "Filme 1"},
                {img: "https://cdn.maioresemelhores.com/imagens/melhores-filmes-atuais-og.jpg", tittle: "Filme 2"},
                {img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png", tittle: "Filme 3"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU", tittle: "Filme 4"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU", tittle: "Filme 5"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBZotpBz63PtBZIyZdKuHdLwe3q_A5kt-1Q&usqp=CAU", tittle: "Filme 6"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Oxp-pleRTAGfZ4dq9h4sw4cEliSYh8dX4rDuAX6BOxRWWVxizvb6wHszM4_VfoMgpTA&usqp=CAU", tittle: "Filme 7"},
                {img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg", tittle: "Filme 8"},
                {img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg", tittle: "Filme 9"},
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU", tittle: "Filme 10"},
            ],
        }
    },
    mounted(){
        setTimeout(() => {
            // this.objects =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
            console.warn(this.objects);
        });

        setTimeout(() => {
            // this.objects = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
        }, 70000);
    }
}
</script>

<style scoped>
.NewCards{
  height: 210px;
  width: 240px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
} 
 .img{
  /* height: 160px;
  width: 240px; */
  margin: 0;
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
} 
.tittle{
  margin: 0;
  margin-top: 10px; /* Espaço entre a imagem e o título */
  text-align: center; /* Centraliza o texto horizontalmente */
  color: var(--dark);
  background-color: white;
} 

</style>