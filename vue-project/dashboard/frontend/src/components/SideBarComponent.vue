<template>
    <div class="sidebar">
        <div class="top">
    
            <div class="avatar">
                <span><i class="fa fa-user"></i></span>
            </div>
            <div class="info">
                <p class="name">Mateus Correia</p>
                <span class="status">online</span>
            </div>

        </div>

        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Início</router-link></li>
                <li><router-link :to="{name: 'clientes'}"><i class="fa fa-users"></i> Clientes</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-box"></i> Products</router-link></li>
                <li><router-link :to="{name: 'sales'}"><i class="fa fa-store"></i> Vendas</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name: "SidebarComponent",
}

</script>

<style lang="scss">
.sidebar{
   
    
    .top{
        width: 100%;
        display: flex;
        justify-content:center;
        padding: 25px 5px;
        align-items: center;
        margin-top: 65px;
        .avatar{
            margin-right: 10px;

            span{
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
            }
        }

        .info{

            .name{
                margin: 0;
                color: white;
            }
            .status{
                margin: 0;
                color: rgb(17, 224, 17);
            }
        }

    }
    .menu{
        padding: 10px 20px;
        margin-top: 15px;
        

        ul li {
            margin: 25px 0;
            list-style: none;
            font-weight: 200;
        }
        
        
        a {
            color: white;
            text-decoration: none;

        }
    }


}
</style>