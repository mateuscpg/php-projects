<template>
    <aside 
    :class="{'is-expanded' : isExpanded }"
    @mouseenter="toggleMenu(true)"
    @mouseleave="toggleMenu(false)"
    v-if="authenticated"
    >
        <div class="logo-container" v-if="isExpanded == false">
            <div class="logo-class">
                <img src="../../../../public/images/logonovapequena.png" class="logo-isNotIsExpanded" alt="logo" v-if="isExpanded == false">
            </div>
        </div>
        <div class="logo-container-isExpanded" v-if="isExpanded == true">
            <div class="logo-class-isExpanded">
                <img src="../../../../public/images/logonovagrande.png" alt="logo" v-if="isExpanded" class="logo-isExpanded">
            </div>
        </div>
        
        <div class="user-info" :style="{ 'justify-content': isExpanded ? 'start' : 'center', 'margin-left': isExpanded ? '0.3rem' : '0' }">
            <div class="user-image">
                <router-link to="/profile">
                    <img :src="userImage" alt="" />
                </router-link>
            </div>
            <div class="user-name" v-if="isExpanded">{{ userName }}
            
            <div style="color: rgb(135, 216, 13); font-size: 0.8rem;
            " v-if="isExpanded
            ">online</div>
            </div>
        </div>
        

        <div class="menu">



      <router-link class="button" to="/home" :class="{'hover-effect': $route.path === '/home','justify-content-center':!isExpanded}">
        <span class="material-symbols-rounded">home</span>
        <span v-if="isExpanded" class="text">Início</span>
      </router-link>

      
      <div class="sub-menu">
        <div class="button" @click="toggleSubMenu" :class="{'justify-content-center':!isExpanded}">
          <span class="material-symbols-rounded">category</span>
          <span v-if="isExpanded" class="text">Categorias</span>
          <span class="material-symbols-rounded" v-if="showSubMenu && isExpanded" >expand_more</span>
        </div>

  
        <router-link
        :class="{'hover-effect': $route.path === '/category/acction','justify-content-center':!isExpanded}"
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/acction"
        >
          <span v-if="isExpanded" class="text">Ação</span>
        </router-link>

        <router-link
        :class="{'hover-effect': $route.path === '/category/adventure','justify-content-center':!isExpanded}"
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/adventure"
        >
          <span v-if="isExpanded" class="text">Aventura</span>
        </router-link>

        <router-link
        :class="{'hover-effect': $route.path === '/category/romance','justify-content-center':!isExpanded}"
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/romance"
        >
          <span v-if="isExpanded" class="text">Romance</span>
        </router-link>
        
        <router-link
        :class="{'hover-effect': $route.path === '/category/terror','justify-content-center':!isExpanded}"
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/terror"
        >
          <span v-if="isExpanded" class="text">Terror</span>
        </router-link>

        <router-link
        :class="{'hover-effect': $route.path === '/category/comedy','justify-content-center':!isExpanded}"
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/comedy"
        >
          <span v-if="isExpanded" class="text">Comédia</span>
        </router-link>
        
      </div>

      <router-link class="button" to="/about" :class="{'hover-effect': $route.path === '/about','justify-content-center':!isExpanded}">
        <span class="material-symbols-rounded">visibility</span>
        <span v-if="isExpanded" class="text">Sobre</span>
      </router-link>
            <router-link class="button" to="/team" :class="{'hover-effect': $route.path === '/team','justify-content-center':!isExpanded}">
                <span class="material-symbols-rounded">group</span>
                <span v-if="isExpanded" class="text">Time</span>
            </router-link>
            <!-- <router-link class="button" to="/contact" :class="{'justify-content-center':!isExpanded}">
                <span class="material-symbols-rounded">email</span>
                <span v-if="isExpanded" class="text">Contatos</span>
            </router-link> -->
        </div>
        <!-- <div class="flex"></div>
        <div class="menu">
            <div class="button" :class="{'justify-content-center':!isExpanded}" @click="redirectToLogin">
              <span class="material-symbols-rounded">logout</span>
                <span v-if="isExpanded" class="text">Sair</span>
            </div>
            </div> -->

    </aside>
  
</template>

<script>
import api from '../../services/Axios'
import { USER_COLLECTION } from '../../collection';

export default {
  data() {
    return {
      user: {},
      perfil:{},
      MovieSelected:[],
      userName: '',
      userImage: '',
      showSubMenu: false,
      isExpanded: localStorage.getItem('isExpanded') === 'true',
      authenticated: true,
    };
  },
  methods: {

    redirectToLogin(){
      localStorage.setItem(USER_COLLECTION,JSON.stringify({...this.user,isUserLoggedIn:false }));

      window.location.href ='/sair';
    },
    // async dadosUsuario(){
      
    // },
    openInfoMovie(movie) {
      console.log("O id desse filme é o id: " + movie.id );
      this.$router.push({ name: 'ShowMovie', query: { id: movie.id, title: movie.title, img: movie.image, description: movie.description, video: movie.video } });
  },

    toggleMenu(expaned) {
      this.isExpanded = expaned;
      localStorage.setItem('isExpanded', this.isExpanded);
    },
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
  },
  created(){
    try {
        this.user = JSON.parse(localStorage.getItem(USER_COLLECTION));
        this.userName = this.user.name;
        this.userImage = this.user.photo;
      }
      catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    // this.dadosUsuario();

  }
};
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-container-isExpanded{
    display: flex;
    align-items: center;
    justify-content: center;
}

aside{
    display: flex;
    // justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
    flex-direction: column;
    width: calc(2rem + 2rem);
    min-height: 100vh;
    overflow: hidden;
    // padding: 1rem;
    background-color: var(--dark);
    color: var(--light);

    transition: 0.3s ease-out;

.user-info {
    // margin-top: 50px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
//   margin-bottom: 3rem;
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

.user-name {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    color: var(--gray);
}

.sub-menu {
  display: flex;
  flex-direction: column;
}
.button{
    cursor: pointer;
    border-radius: 20px;
}
// .button:hover{
//     background-color: rgb(22, 22, 22);
//     border-radius: 20px;
// }
.hover-effect{
  background-color: rgb(22, 22, 22);
  border-radius: 22px;

}

.sub-button {
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
text-decoration: none;
padding-top: 1.1rem;
padding-bottom: 1.1rem;
color: var(--light);
}
.sub-button:hover{
    color: var(--pink);
    transition: 0.2s linear;
}

.sub-button .text {
  margin-left: 5.5rem; /* Adjust the spacing as needed */
}


    .flex{
        margin-top: auto;
    }
    .logo-class{
        margin-top: 0.5rem;
        margin-bottom: 2rem;

        img{
            width: 4rem;
            height: 4rem;
        }
        // .logo-isExpanded{
        //     top: 0;
        //     width: 6rem;
        //     height: 6rem;
        // }
    }
    .logo-class-isExpanded{
        // margin-bottom: 2rem;
        .logo-isExpanded{
            top: 0;
            width: 12rem;
            height: 12rem;
        }
    }
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition:  0.2s ease-out;

            .material-symbols-rounded {
                font-size: 2rem;
                color: var(--light);
            }
            &:hover{
                .material-symbols-rounded{
                    color: var(--blue);
                    transform: translateX(0.2rem);
                    transition:  0.2s ease-out;
                }
            }
        }
    }
    h3, .button .text{
        opacity: 0;
        transition : 0.3s ease-out;
    }
    h3{
        color: var(--gray);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    .menu{
        margin: 0 -1rem;
        margin-top: 5rem;
        .button{
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 1rem  1rem;
            transition: 0.2s ease-out;
            
            .material-symbols-rounded{
                font-size: 1.6rem;
                color: var(--light);
                transition: 0.3s ease-out;
            }
            .text{
                color: var(--light);
                transition: 0.3s ease-out;
            }
            &:hover{
                .material-symbols-rounded, .text {
                    color: var(--blue);
                }
            }
            
        }
    }
    &.is-expanded{
        width: var(--sidebar-width);
        .menu-toggle-wrap{
            top: -3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
        h3, .button .text{
            opacity: 1;
           
        }
        .button{
            .material-symbols-rounded{
                margin-left: 0.8rem;
                margin-right: 2rem;
            }
        }
    }

    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
    
}
</style>