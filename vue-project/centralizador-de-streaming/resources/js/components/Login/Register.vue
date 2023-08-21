<template>
  <div>
    <HeaderLogin/>
    <div class="content">
      <div class="forms">
        <h2>Cadastro</h2>
        <form>
          <div class="form-group">
            
            <div class="user-info">
              <div class="user-image" @click="chooseImage">
                <img :src="photo" style="cursor: pointer;" alt=""  />
              </div>
              <label for="profile-image-input">Foto do perfil</label>
              <input
                type="file"
                id="profile-image-input"
                style="display: none"
                @change="handleImageChange"
              />
            </div>


            <label for="exampleInputName">Nome</label>
            <input v-model="name" type="text" class="form-control" id="exampleInpuName" placeholder="Digite seu nome">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
          </div>
          <div class="form-group">
            <label for="exampleInputDate">Data de nascimento</label>
            <input v-model="birth" type="date" class="form-control" id="exampleInputDate" placeholder="Data de nascimento">
          </div>
          <div class="form-group mt-6">
            <label for="exampleInputDate">Você possui quais streamings?</label>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="hbo" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
            <label  class="form-check-label" for="inlineCheckbox1">HBO</label>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="netflix" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
            <label class="form-check-label" for="inlineCheckbox1">Netflix</label>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="primevideo" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
            <label class="form-check-label" for="inlineCheckbox1">Prime Video</label>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="paramount"  class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
            <label class="form-check-label" for="inlineCheckbox1">Paramount</label>
          </div>
          
          <div class="form-check form-check-inline">
            <input v-model="starplus" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
            <label class="form-check-label" for="inlineCheckbox1">Star +</label>
          </div>
          
          <button type="submit" class="cadastrar " @click="registerUser">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderLogin from '../Header/HeaderLogin.vue';

export default {
  components: {
    HeaderLogin,
  },
  data(){
    return{
      name:'',
      email:'',
      password:'',
      photo: '',
      actualPhoto: '',
      birth:'',
      hbo:0,
      netflix:0,
      primevideo:0,
      paramount:0,
      starplus:0,
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
        this.photo = e.target.result; // Define a URL para exibição
        this.actualPhoto = e.target.result; // Armazena a URL no actualPhoto
      };
      reader.readAsDataURL(file); // Lê o arquivo como URL de dados (base64)
    }
  },


    registerUser(){
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        photo: this.actualPhoto,
        birth: this.birth,
        hbo: this.hbo ? 1 : 0,
        netflix: this.netflix ? 1 : 0,
        primevideo: this.primevideo ? 1 : 0,
        paramount: this.paramount ? 1 : 0,
        starplus: this.starplus ? 1 : 0
      };

      axios.post('/create-user', data)
      .then(response => {
      this.$router.push('/login');
    })
    .catch(error => {
      console.log(error);
    });
    },

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
  width: 100%;
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

.forms .form-group label {
  color: #00aacd;
  font-weight: 500;
  margin-bottom: 8px;
}

.forms .form-group input {
  padding: 8px;
  width: 100%;
}
.cadastrar{
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
.cadastrar:hover{
  background-color: #00aacd;
  outline: 1px solid #fff;
  
} 
</style>
