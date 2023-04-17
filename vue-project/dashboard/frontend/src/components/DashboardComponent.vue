<template>
    <div class="main">
        
        <div class="sidebar">
            <SideBarComponent/>
        </div>


        <div class="content-right">
    
            <div class="navbar">
                <NavBarComponent/>
            </div>

            
            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>

        </div>

    </div>
</template>

<script>

import SideBarComponent from './SideBarComponent.vue'
import NavBarComponent from './NavBarComponent.vue'

export default{
    name:'DashboardComponent',
    components: {
        SideBarComponent,
        NavBarComponent
    }

}
</script>


<style lang="scss" src="../assets/scss/styledashboard.scss" scoped />
