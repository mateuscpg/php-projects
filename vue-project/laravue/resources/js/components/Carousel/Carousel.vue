<template>
    <VueAIcarousel 
    :Property="{
        ID: 'One',
        Dlay:80000,
        NavBtn: 'naveBtnStyle',   
        CountPos: 'CounterPosition', 
        CounterStyle: 'counterNewStyle', 
        CounterActiveStyle: 'CAnewStyle', 
        }"
    
    >
        <div v-for="object in objects" :key="object.id" class="NewCards">
            <div class="img">
                {{ object }}
            </div>
            <!-- <div class="tittle">
                alnsldgblasgd
            </div> -->
        </div>
    </VueAIcarousel>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
export default {
    components: {VueAIcarousel},
    data (){
        return{
            objects: [],
        }
    },
    mounted(){
        setTimeout(() => {
            this.objects =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
            console.warn(this.objects);
        });

        // setTimeout(() => {
            this.objects = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
        // }, 70000);
    }
}
</script>

<style scoped>
/* .NewCards{
    height: 150px;
    width:150px ;
    border-radius: 0;
    display: flex;
    flex-direction: column;
} */
/* .img{
    height:50px ;
}
.tittle{
    display: flex;
    background-color: white;
} */
</style>