<template>
  <div class="background">
    <div class="logo">
        <div class="brush1">
            <div class="color"></div>
            <div class="lines"></div>
        </div>
        <div class="brush2">
            <div class="color2"></div>
        </div>
        <div class="brush3"></div>

    </div>
  </div>
</template>

<script setup>
const stick1 = document.getElementsByClassName('color')[0]
const stick2 = document.getElementsByClassName('color2')[0]
const stick3 = document.getElementsByClassName('brush3')[0]

// make reverse animation trigger
setTimeout(() =>{
    stick2.style.animation = "movedown 0.5s ease forwards"
}, 3000)
setTimeout(() =>{
    stick3.style.animation = "movedown 0.5s ease forwards"
}, 3500)
setTimeout(() =>{
    stick1.style.animation = "movedown 0.5s ease forwards"
}, 4000)

</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
}

.background .logo{
    width: 150px;
    height: max-content;
    display: flex;
    justify-content: space-between;
    position: relative;    
} 

.background .logo .brush1{
    width: 50px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
}
.background .logo .brush1 .color{
    width: 100%;
    height: 0%;
    background-color: red;
    position: relative;
    z-index: 2;
    animation: moveup 0.5s ease forwards;
}
.background .logo .brush2{
    width: 50px;
    height: 220px;
    display: flex;
    align-items: flex-end;
}
.background .logo .brush2 .color2{
    width: 100%;
    height: 0%;
    background-color: red;
    animation: moveup 0.5s ease forwards;
    animation-delay: 1s ;
}
.background .logo .brush3{
    width: 50px;
    height: 0;
    position: absolute;
    z-index: 2;
    transform: skew(24.4deg);
    transform-origin: top left;
    background: red;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.33);
    animation: moveup 0.5s ease forwards;
    animation-delay:  0.5s;
}

/* Onde a animação inicia */
@keyframes moveup{
    from {
        height: 0;
    }
    to {
        height: 220px;
    }
}

/* Animação reversa */
@keyframes movedown{
    from {
        height: 220px;
    }
    to {
        height: 0;
    }
} 


</style>