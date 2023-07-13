<template>
    <div>
        <div class="content">
            <router-view/>
        </div>
    </div>
    
</template>

  <script>
  import Header from './Header/Header.vue';
  export default {
    components: {
      Header,
    },

  };

  </script>
  
  <style scoped>
 /* .content {
  display: flex;
  background-image: url('https://media.ldlc.com/apple/tv/imgTv/tv_app.png');
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
}

.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
   */
  </style>
  