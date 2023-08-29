<template>
    <div>
      <Header/>
      <div class="content">
        <div class="forms">
          <h2>Perfil</h2>
          <form>
            <div class="user-info">
              <div class="user-image" @click="chooseImage">
                <img :src="user.photo" style="cursor: pointer;" alt=""  />
              </div>
              <label for="profile-image-input">Foto do perfil</label>
              <input
                type="file"
                id="profile-image-input"
                style="display: none"
                @change="handleImageChange"
                
              />
            </div>
            <div class="form-group">
              <label for="exampleInputName">Nome</label>
              <input type="text" class="form-control" id="exampleInpuName" v-model="newUser.name" placeholder="Digite seu nome" >
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email </label>
              <input type="email" class="form-control" id="exampleInputEmail1" v-model="newUser.email" aria-describedby="emailHelp" placeholder="Digite seu email" >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="newUser.password" placeholder="Digite sua senha">
            </div>
            <div class="form-group">
              <label for="exampleInputDate">Data de nascimento</label>
              <input type="date" class="form-control" id="exampleInputDate" v-model="newUser.birth" placeholder="Data de nascimento" >
            </div>
            
            <button type="button" class="btn btn-primary " @click="updatePerfil">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../Header/Header.vue';
  import api from '../../services/Axios';
  
  export default {
    components: {
      Header,
    },
    data(){
      return{
        user: {
          id: null,
          name: '',
          email: '',
          photo: '',
          actualPhoto: '',
          password: '',
          birth: '',
        },
        newUser: {
          name: '',
          email: '',
          photo: '',
          actualPhoto: '',
          password: '',
          birth: '',
        },

      }
    },
    methods:{
      chooseImage() {
        document.getElementById('profile-image-input').click();
      },
      handleImageChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.user.photo = e.target.result; // Define a URL para exibição
          this.newUser.actualPhoto = e.target.result; // Armazena a URL no actualPhoto
        };
        reader.readAsDataURL(file); // Lê o arquivo como URL de dados (base64)
      }
    },
      async dadosUsuario(){
      try {
        let dados = await api.getPerfil();
        this.user.id = dados.id;
        this.user.photo = dados.photo;
        this.user.name = dados.name;
        this.user.email = dados.email;

      }
      catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    },


    async updatePerfil(){
      const data = {
        name: this.newUser.name,
        email: this.newUser.email,
        password: this.newUser.password,
        photo: this.newUser.actualPhoto,
        birth: this.newUser.birth,
      };
      try{
        axios.put(`/update-user/${this.user.id}`, {
          data
        })
          this.$router.push('/home');
      }
      catch(error){
        console.error("Erro ao atualizar", error);
      }
    },
      redirectToHome(){
        this.$router.push('/home');
      }
    },

    activated(){
      this.updatePerfil();
    },
    created(){
      this.dadosUsuario();
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
  .user-info {
     /* margin-top: 50px; */
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 3rem; */
}
.user-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%; /* Make the image rounded */
  overflow: hidden; /* Ensure the image is properly clipped within the circle */
  border: 2px solid var(--blue);

}

.user-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  
  .forms button[type="button"] {
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
  