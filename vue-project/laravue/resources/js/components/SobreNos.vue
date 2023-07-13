<template>
    <div>
      <HeaderLogin/>
      <div class="content">
        <div class="sobre-nos">
          <p>Essa página foi desenvolvida com o intuito de centralizar todas as suas streamings, facilitando assim a sua busca por um filme.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderLogin from './Header/HeaderLogin.vue';
  export default {
    components: {
      HeaderLogin,
    },


  };
  </script>
  
  <style scoped>
 .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
}
.sobre-nos{
  color: white;
  position: absolute;
  width: 30%;
  top: 15%;
  background-color: rgba(39, 39, 47, 0.9); /* Cor de fundo com transparência */
  display: flex;
  align-items: center;
  padding: 25px;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 25px;
  flex-direction: column;
}

  
  </style>
  