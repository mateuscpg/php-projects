<template>
    <header class="header">
      <div class="logo-container">
        <h2>Centralizador de streaming</h2>
        <!-- <img class="logo" src="caminho/para/sua/logo.png" alt="Logo"> -->
      </div>
      <div class="buttons-container">

        <a href="#" class="icon-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </a>
        
        <input class="header-search" type="search" placeholder="Pesquise">
        <button class="sair-button" @click="redirectToLogin">Sair</button>
    </div>
  </header>
</template>


<script>;
export default {
    methods: {
    redirectToLogin() {
      this.$router.push('/');
    },
  }
};
</script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    background-color: #17161b;
  }
  
  .logo-container {
    flex: 1;
  }
  h2{
    color: #fe0084;
    /* font-family: sans-serif; */
  }
  
  .logo {
    height: 40px;
  }
  
  .buttons-container {
    display: flex;
  }
  

.sair-button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 40px;
  background-color: transparent;
  border-radius: 2px;
  outline: 1px solid #00aacd;
  color: #fff;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}

.sair-button:hover,
.signin-button:hover {
  background-color: #00aacd;
  outline: 1px solid #fff;
  color: #17161b;
}
.header-search{
  padding: 8px 25px;
  background-color: transparent;
  outline: 1px solid #00aacd;
  border: none;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}
.icon-search{
  color: white;
  margin-right: 6px;
  margin-top: 14px;
}

  </style>
  