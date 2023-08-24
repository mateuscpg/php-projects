<template>
    <div>
      <Header/>
      <div class="content">
        <div class="sobre-nos">
          <p>Essa página foi desenvolvida com o intuito de centralizar todas as suas streamings, facilitando assim a sua busca por um filme.</p>
        </div>
        <Spinner/>
      </div>
    </div>
  </template>
  
  <script>
  import Spinner from '../../mixins/Spinner.vue';
  import Header from '../Header/Header.vue'

  export default {
    components: {
      Header,Spinner,
    },


  };
  </script>
  
  <style scoped>

.content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  /* height: 100%; */
  height: 100vh;
  color:var(--light);
}
.sobre-nos{
  border-radius: 6px;
  background-color: rgba(39, 39, 47, 0.5); 
  padding: 1rem ;
  width: 50rem;
  justify-content: center;
}

  
  </style>
  