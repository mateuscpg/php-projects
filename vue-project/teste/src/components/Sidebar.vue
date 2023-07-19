<template>
    <aside :class="{'is-expanded' : isExpanded  }">
        <div class="logo">
            <img src="../assets/vue.svg" alt="Vue">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <span class="material-icons">
                    <span class="material-icons" @click="ToggleMenu">
                    keyboard_double_arrow_right
                    </span>
                </span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">visibility</span>
                <span class="text">About</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
           
        </div>

    </aside>
  
</template>

<script setup>
import {ref} from 'vue'

const isExpanded = ref(false)

const ToggleMenu = () => {
    isExpanded.value = !isExpanded.value
}

</script>

<style lang="scss" scoped>
aside{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 2rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo{
        margin-bottom: 1rem;

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
                    color: var(--primary);
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
    .menu{
        margin: 0 -1rem;

        .button{
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 1rem  1rem;
            transition: 0.2s ease-out;
            
            .material-icons{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
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
    }

    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}
</style>