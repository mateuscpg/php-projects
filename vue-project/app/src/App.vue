<template>
  <TheHeader v-if="showHeader"/>
  <div v-show="showName">
    Nome: {{ firstname }}<br>
    Sobrenome: {{ lastname }}
  </div>

  <div v-if="accessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário normal</div>

  <img
      alt="Vue logo"
      src="./assets/logo.png"
  >

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from "./components/TheHeader.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader

  },
  data() {
    return {
      showHeader: true,
      firstname: 'Mateus',
      lastname: 'Correia',
      showName: true, 
      accessLevel: 'admin'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
