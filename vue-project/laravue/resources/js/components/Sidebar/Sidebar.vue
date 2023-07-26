<template>
    <aside 
    :class="{'is-expanded' : isExpanded }"
    @mouseenter="toggleMenu(true)"
    @mouseleave="toggleMenu(false)">
        <div class="logo">
            <img src="../../../../public/images/vue.svg" alt="Vue">
        </div>

        <!-- <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <span class="material-icons">
                    <span class="material-icons">
                    keyboard_double_arrow_right
                    </span>
                </span>
            </button>
        </div> -->
        <div class="user-info">
        <!-- Rounded user image -->
            <div class="user-image">
                <img :src="userImage" alt="" />
            </div>
            <div class="user-name" v-if="isExpanded">{{ userName }}</div>
            <p style="color: rgb(135, 216, 13); font-size: 0.8rem;
            " v-if="isExpanded
            ">online</p>
        </div>

        <!-- <h3>Menu</h3> -->
        <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>

      <!-- Category menu item with drop-right submenu -->
      <div class="sub-menu">
        <div class="button" @click="toggleSubMenu">
          <span class="material-icons">category</span>
          <span class="text">Category</span>
        </div>

        <!-- Submenu items -->
        <router-link
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/subitem1"
        >
          <span class="material-icons">subitem1_icon</span>
          <span class="text">Subitem 1</span>
        </router-link>
        <router-link
          v-if="showSubMenu && isExpanded"
          class="sub-button"
          to="/category/subitem2"
        >
          <span class="material-icons">subitem2_icon</span>
          <span class="text">Subitem 2</span>
        </router-link>
      </div>

      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>
            <router-link class="button" to="/team">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
            </div>

    </aside>
  
</template>

<script setup>
import {ref} from 'vue'

const userName = ref('Mateus Correia'); // Replace with default user name
const userImage = ref('https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg'); // Replace with default image URL
const showSubMenu = ref(false);

const isExpanded = ref(localStorage.getItem('isExpanded') === 'true')

const toggleMenu = (expaned) => {
    isExpanded.value = expaned;
    localStorage.setItem('isExpanded', isExpanded.value)
}
const toggleSubMenu = () => {
  showSubMenu.value = !showSubMenu.value;
};

</script>

<style lang="scss" scoped>
aside{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    flex-direction: column;
    width: calc(2rem + 2rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.user-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%; /* Make the image rounded */
  overflow: hidden; /* Ensure the image is properly clipped within the circle */
}

.user-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--gray);
}
/* Add this to your existing styles */
.sub-menu {
//   margin-left: 1rem; /* Adjust the spacing as needed */
  display: flex;
  flex-direction: column;
}

.sub-button {
//   padding-left: 4rem; /* Adjust the spacing as needed */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
}

.sub-button .material-icons {
  font-size: 1.6rem;
}

.sub-button .text {
  margin-left: 0.5rem; /* Adjust the spacing as needed */
}


    .flex{
        flex: 1 1 0;
    }
    .logo{
        margin-top: 0.5rem;
        margin-bottom: 3rem;

        img{
            width: 2rem;
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

            .material-icons {
                font-size: 2rem;
                color: var(--light);
            }
            &:hover{
                .material-icons{
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
        .button{
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 1rem  1rem;
            transition: 0.2s ease-out;
            
            .material-icons{
                font-size: 1.6rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }
            .text{
                color: var(--light);
                transition: 0.2s ease-out;
            }
            &:hover{

                .material-icons, .text {
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
            .material-icons{
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