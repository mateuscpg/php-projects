<template>
  <header class="header">
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

<script>
export default {
  props: {
    showSideBar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/');
    },
    toggleSideBar() {
      this.$emit('update:showSideBar', !this.showSideBar);
    },
  },
};
</script>


<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 22px;
  background-color: var(--dark);
}

.logo-container {
  flex: 1;
  font-size: 32px;
  padding: 0px 26px;
  background-color: transparent;
  border: none;
  color: #fe0084;

}

h2 {
  color: #fe0084;
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
  margin-top: 12px;
}
.button-sidebar{
  font-size: 30px;
  padding: 3px;
  background-color: transparent;
  border: none;
  color: #fe0084;

}

</style>
