<template>
    <div class="app">
      <Sidebar v-if="$route.path !== '/login' && $route.path !=='/register' && $route.path !=='/intro'"/>
        <router-view/>
    </div>
</template>

  <script>
  import Sidebar from './Sidebar/Sidebar.vue'
  export default {
    components: {
      Sidebar,
    },

  };

  </script>
  
  <style lang="scss">
  :root {
  --blue: #00aacd;
  --pink: #fe0084;
  --grey: #64748b;
  --dark: rgb(0, 0,0, 0.9);
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 200px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fire Sans', sans-serif;
}

body {
  font-family: 'Nunito', sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url('https://media.ldlc.com/apple/tv/imgTv/tv_app.png');
  // background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
  background-size: cover;
  background-attachment: fixed;
}
button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app{
  // display: flex;
  main{
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width:768px){
      padding-left:10rem ;
    }
  }
}
.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  color:var(--light)
}
  </style>
