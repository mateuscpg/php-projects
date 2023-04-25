<template>
  <header>
    <nav class="container">
      <a href="/"
        ><img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="mDEV"
          id="logo"
      /></a>
      <a onclick="toggleMenu()">
        <img v-on:click="openMenu"
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
          alt="Abrir menu"
          id="menu-button"
        />
      </a>
      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
      <div id="menu-items" :class="{ active: menuActive }">
        <a href="/"
          ><img
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="mDEV"
            id="menu-logo"
        /></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Vídeos</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contatos">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    openMenu: function() {
      this.menuActive = true;
    },
    closeMenu: function() {
      this.menuActive = false;
    }
  }
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-between;
}
#logo {
  width: 130px;
}
#menu-button {
  width: 30px;
}
#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.8;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}
#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
#menu-items.active {
  display: flex;
}
ul {
  list-style: none;
  text-align: center;
}
ul li {
  margin: 20px 0px;
}
ul li a {
  color: var(--color-text-light);
}
</style>
