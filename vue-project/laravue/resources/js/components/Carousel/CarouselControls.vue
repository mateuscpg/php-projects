<template>
  <button class="carousel-control left" @click="$emit('prev')"> 
    <span class="material-icons">
chevron_left
</span>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <span class="material-icons">
chevron_right
</span>
  </button>
</template>

<script>
export default {
    emits:['prev', 'next'],

}
</script>

<style scoped>
.carousel-control {
    background-color: rgba(0, 0, 0, .5 );
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 50px;
    top: calc(50% - 25px);
    color: #f3f3f3;
    cursor: pointer;
}
.left{
    left: 0;
}
.right{
    right: 0;
}

</style>