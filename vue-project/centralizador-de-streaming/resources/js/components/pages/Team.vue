<template>
    <Header/>
  <div class="content">
    <div class="team">

        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://media.licdn.com/dms/image/D4D03AQHana3NwIBbSA/profile-displayphoto-shrink_800_800/0/1680109933247?e=1697068800&v=beta&t=S_i3fP4fQ_y_GDftV1QDlib_ajtiPoZbmvUY_6Q8w-8" alt="Imagem do dev">
            <div class="card-body">
                <h3 class="card-title">Mateus Correia</h3>
                <h5 class="card-title">Desenvolvedor full stack</h5>
                <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                <a href="https://github.com/mateuscpg" target="_blank" class="btn btn-primary">GitHub</a>
                <a href="https://www.linkedin.com/in/mateuscpg/" target="_blank" class="btn btn-primary">Linkedin</a>
                <a href="#" target="_blank" class="btn btn-primary">Email</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://media.licdn.com/dms/image/C4D03AQElxYx3A84v7w/profile-displayphoto-shrink_800_800/0/1659615831940?e=1697068800&v=beta&t=ePSK2CMfI_rY8JpsLpRCkU_KqGFoA7nBLjrybqHUTaI" alt="Imagem do devops">
            <div class="card-body">
                <h3 class="card-title">Lucas Correia</h3>
                <h5 class="card-title">Devops</h5>
                <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                <a href="https://github.com/lucasdocker" target="_blank" class="btn btn-primary">GitHub</a>
                <a href="https://www.linkedin.com/in/lucasclsr/" target="_blank" class="btn btn-primary">Linkedin</a>
                <a href="#" target="_blank" class="btn btn-primary">Email</a>
            </div>
        </div>
    </div>
    <Spinner/>
  </div>
</template>

<script>
import Spinner from '../../mixins/Spinner.vue'
import Header from '../Header/Header.vue';
export default {
    components: {Header,Spinner,}

}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.team {
  display: flex; /* Added to make cards display side by side */
  gap: 50px; /* Adjust the gap between cards as needed */
}
a{
    margin-right: 5px;
}

.card {
  width: 18rem;
  text-align: center;
  /* Add any additional card styling here */
}
</style>