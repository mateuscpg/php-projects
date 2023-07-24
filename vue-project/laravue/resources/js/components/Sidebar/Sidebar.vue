<template>
    <aside 
    :class="{'is-expanded' : isExpanded }"
    @mouseenter="ToggleMenu(true)"
    @mouseleave="ToggleMenu(false)">
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

        <!-- <h3>Menu</h3> -->
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
                <router-link class="button" to="/about">
                    <span class="material-icons">category</span>
                    <span class="text">Category</span>
                </router-link>
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

const isExpanded = ref(localStorage.getItem('isExpanded') === 'true')

const ToggleMenu = (expaned) => {
    isExpanded.value = expaned;
    localStorage.setItem('isExpanded', isExpanded.value)
}

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