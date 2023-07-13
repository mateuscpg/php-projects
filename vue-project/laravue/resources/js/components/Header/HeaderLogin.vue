<template>
    <header class="header">
      <div class="logo-container">
        <h2>Centralizador de streaming</h2>
        <!-- <img class="logo" src="../../../../public/images/Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo (1).png" alt="Logo"> -->
      </div>
      <div class="buttons-container">
        <button class="login-button" @click="redirectToLogin">Login</button>
        <button class="signin-button" @click="redirectToSignIn">Sign in</button>
        <button class="login-button" @click="redirectToSobreNos">Sobre nós</button>
        
    </div>
  </header>
</template>


<script>;
export default {
    methods: {
    redirectToSobreNos() {
      this.$router.push('/sobre-nos');
    },
    redirectToLogin() {
      this.$router.push('/');
    },
    redirectToSignIn() {
      this.$router.push('/signin');
    }
  }
};
</script>
  
  <style scoped>
  .logo{
    width: 40px;
    height: 40px;
  }
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
  

.login-button,
.signin-button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 40px;
  background-color: transparent;
  border-radius: 2px;
  outline: 1px solid #00aacd;
  color: #fff;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}

.login-button:hover,
.signin-button:hover {
  background-color: #00aacd;
  outline: 1px solid #fff;
}
  </style>
  