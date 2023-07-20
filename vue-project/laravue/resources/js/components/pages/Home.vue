<template>
  <div>
    <Header/>
    <div class="content">
      This is a Home Page
    </div>
  </div>
</template>


<script>
import Header from '../Header/Header.vue'
export default {

  components: {
    Header
  },
  data() {
    return {

    };
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
  color:var(--light)
}

</style>
