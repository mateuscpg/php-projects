<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <h1>Login do sistema</h1>
        </header>

        <div class="form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite seu email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Digite sua senha"
              />
            </div>
                <br>
            <button type="submit" class="btn btn-primary" @click="login">Acessar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'LoginView',

  data() {
    return {
      
    }
  },
  methods:{
    login(){
      this.$router.push('home')
    }
  }
    
};
</script>

<style lang="scss" src="../assets/scss/stylelogin.scss" scoped />
