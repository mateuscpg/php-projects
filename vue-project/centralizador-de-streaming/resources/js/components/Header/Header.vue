<template>
  <header class="header">
    <div class="buttons-container">
      
      <!-- <h3 style="color: var(--blue);">STREAMING</h3> 
      <h3 style="color: var(--pink);">CENTRALIZER</h3> -->

      <div class="right-container">
        <!-- <a href="#" class="icon-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </a>

        <input class="header-search" type="search" placeholder="Pesquise"> -->
        <button class="sair-button" @click="redirectToLogin">Sair</button>
      </div>
  </div>
  </header>
  
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>


<style scoped>
.header {
  width: 100%;
  /* display: flex; */
  align-items: center;
  position: fixed;
  padding: 22px;
  background-color: rgb(0, 0,0, 0.5);
  z-index: 2;
}
/* h3{
  font-weight: bold;
  text-align: center;
} */

.right-container {
  display: flex;
  align-items: center;
  justify-content:right;
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

.icon-search {
  color: white;
  margin-right: 6px;
}
.header-search{
  margin-right: 8px ;
}

.sair-button {
  padding: 6px 35px;
  background-color: transparent;
  border-radius: 2px;
  outline: 1px solid #00aacd;
  color: #fff;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}

.sair-button:hover {
  background-color: #00aacd;
  outline: 1px solid #fff;
  color: #17161b;
}
</style>
