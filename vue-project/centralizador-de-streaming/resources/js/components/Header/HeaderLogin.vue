<template>
    <header class="header">
      <div class="logo-container">
        <!-- <img class="logo" src="../../../../public/images/Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo (1).png" alt="Logo"> -->
      </div>
      <div class="buttons-container">
        <button class="login-button" @click="redirectToLogin">Login</button>
        <button class="register-button" @click="redirectToregister">Register</button>
        
    </div>
  </header>
</template>


<script>;
export default {
    methods: {
    redirectToLogin() {
      this.$router.push('/login');
    },
    redirectToregister() {
      this.$router.push('/register');
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
    width: 100%;
    justify-content: space-between;
     position: fixed;
    align-items: center;
    padding: 22px;
    z-index: 2;
    background-color: var(--dark);
  }
  
  .logo-container {
    flex: 1;
  }
  
  .logo {
    height: 40px;
  }
  
  .buttons-container {
    display: flex;
  }
  

.login-button,
.register-button {
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
.register-button:hover {
  background-color: #00aacd;
  outline: 1px solid #fff;
}
  </style>
  