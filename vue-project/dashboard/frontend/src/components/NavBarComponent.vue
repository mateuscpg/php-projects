<template>
    <div class="nav-principal">
        <h3 class="logo"><i class="fa fa-bar-chart"></i> Dashboard</h3>
       
    </div>
    <a href="" @click.prevent="logout" class="logout">Sair <i class="fa fa-sign-out-alt"></i> </a>
</template>

<script>
export default{
    name: "NavBarComponent",
    methods: {
        logout(){
            this.$router.push({name: "login"});
        }
    }
}

</script>

<style lang="scss">
.nav-principal{


    .logo{
        color: white;
    }
    
}
.logout{
        color: white;
        text-decoration: none;
    }

</style>