<template>
    <div>
      <Header/>
      <div class="content">
        <div class="sobre-nos">
          <p>Essa página foi desenvolvida com o intuito de centralizar todas as suas streamings, facilitando assim a sua busca por um filme.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../Header/Header.vue'
  export default {
    components: {
      Header
    },


  };
  </script>
  
  <style scoped>

.content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100%;
  color:var(--light);
  background-color: var(--blue);
}
.sobre-nos{
  margin-top: 84px;
  background-color: blue ;
  padding: 1rem 1rem;

  /* position: absolute; */
}

  
  </style>
  