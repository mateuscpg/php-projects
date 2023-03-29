<template>
  <div>
   {{$route.params.id}}
    Usuário<br>
    <button @click="login()">
      Login
    </button>
  </div>
</template>
<script>
export default {
  created() {
    // console.log(this.$route);
  },methods:{
    login(){
      this.$router.push({name: 'home'});
    },
  }
}

</script>