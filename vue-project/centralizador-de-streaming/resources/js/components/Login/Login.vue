<template>
  <div>
    <HeaderLogin/>
    <div class="content">
      <div class="forms">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input type="email" 
              class="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Digite seu email" 
              required
              v-model="email"
            > 
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" 
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder="Digite sua senha" 
              required
              v-model="password"
            >
          </div>

          <button type="submit" class="btn btn-primary" @click="login">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import HeaderLogin from '../Header/HeaderLogin.vue';
// import api from '../../services/Axios';

export default {
  components: {
    Sidebar,
    HeaderLogin,
  },
  data(){
    return{
      email: '',
      password: '',
      user:{},
    }
  },
 
  methods:{
    async login() {
         let dados = await axios.post('/login',{
          email: this.email,
          password: this.password,
        });
        this.user = dados.data.user_auth;
        if (this.user.id_cms_privileges === 1 || this.user.id_cms_privileges === 2) {
            window.location.href = "/home";
        }
    },
    
    redirectToHome() {
      this.$router.push('/home');
    },
    // validateCredentials() {
    //   return (
    //     this.enteredEmail === this.users.email &&
    //     this.enteredSenha === this.users.senha
    //   );
    // },
  },
  activated(){
    this.login();
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
}

.forms {
  position: absolute;
  top: 15%;
  background-color: rgba(39, 39, 47, 0.5); /* Cor de fundo com transparência */
  display: flex;
  align-items: center;
  padding: 25px;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 25px;
  flex-direction: column;
}


.forms .form-group {
  margin-bottom: 10px;
  width: 350px;
}

.forms .form-group label {
  color: #00aacd;
  font-weight: 500;
  margin-bottom: 8px;
}

.forms .form-group input {
  padding: 8px;
  width: 100%;
}

.forms button[type="submit"] {
  padding: 8px ;
  width: 100%;
  margin-top: 20px ;
  background-color: transparent;
  outline: 1px solid #00aacd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
}
.forms button:hover{
  background-color: #00aacd;
  outline: 1px solid #fff;
  
}
</style>
