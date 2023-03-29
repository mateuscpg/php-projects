<template>
    Hello vue<br>
  <AppButton
  data-vue="Mateus"
  @update="getUpdate">

    Save
  </AppButton>

</template>

<script>

import AppButton from "@/components/AppButton.vue";

export default {
  components: {AppButton},
  setup(){
    const getUpdate = (data)=>{
      console.log('getUpdate', data);
    }
    return {
      getUpdate
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
