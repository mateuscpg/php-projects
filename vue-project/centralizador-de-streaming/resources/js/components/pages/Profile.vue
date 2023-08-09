<template>
    <div>
      <Header/>
      <div class="content">
        <div class="forms">
          <h2>Profile</h2>
          <form>
            <div class="form-group">
              <label for="exampleInputName">Nome</label>
              <input type="text" class="form-control" id="exampleInpuName" placeholder="Digite seu nome">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
            </div>
            <div class="form-group">
              <label for="exampleInputDate">Data de nascimento</label>
              <input type="date" class="form-control" id="exampleInputDate" placeholder="Data de nascimento">
            </div>
            
            <button type="submit" class="btn btn-primary " @click="redirectToHome">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../Header/Header.vue';
  
  export default {
    components: {
      Header,
    },
    methods:{
      redirectToHome(){
        this.$router.push('/home');
      }
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
    color: var(--blue);
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .forms .form-group input {
    padding: 8px;
    width: 100%;
  }
  .forms .form-group input:focus {
  outline: 2px solid var(--blue); /* Customize the outline color and style */
}
  
  .forms button[type="submit"] {
    padding: 8px ;
    width: 100%;
    margin-top: 20px ;
    background-color: transparent;
    outline: 1px solid var(--blue);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;
  }
  .forms button:hover{
    background-color: var(--blue);
    outline: 1px solid #fff;
    
  }
  </style>
  