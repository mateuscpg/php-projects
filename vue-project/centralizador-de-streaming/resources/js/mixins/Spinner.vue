<template>
  <div class="spin" v-if="isLoading">
    <div class="ring">

      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, 
    };
  },
  

  methods: {
    simulateLoading() {
      setTimeout(() => {
        this.isLoading = false; // Set isLoading to false after a delay
      }, 1400); // Adjust the delay as needed
    },
  },
  mounted() {
    this.simulateLoading(); // Call the loading simulation method
  },

}
</script>

<style>

.spin{
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
}
.ring{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    height: 100%;

}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--blue);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}


</style>