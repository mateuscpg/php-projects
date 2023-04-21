<template>
  <div class="my_card">
    <div class="content top">
    <h3>{{ type }}</h3>
    <p class="percentage"><i class="fa fa-arrow-up"></i> {{ percentage }}</p>
    </div>

    <div class="content footer">
        <i :class="['fa icon', icon]"></i>
        <p class="qtd">{{ qtd }}</p>
    </div>
    
  </div>
</template>


<script>


export default{
    name: "CardsComponent",

    props: {
        type: String,
        percentage: String,
        qtd: String,
        icon: String,
        

    }
}
</script>

<style lang="scss" scoped>

.my_card{
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #7a6ff3;
    padding: 15px;
    border-radius: 7px;
    color: white;

    .content{
        display: flex;
        justify-content: space-between;
    
    }
    
    .top{


        .percentage{
            color: rgb(56, 228, 56);
        }
        
    }

    .footer{
        .icon {
            font-size: 40px;
        }
        .qtd{
            font-size: 30px;
            margin: 0;
        }
    }
}

</style>
