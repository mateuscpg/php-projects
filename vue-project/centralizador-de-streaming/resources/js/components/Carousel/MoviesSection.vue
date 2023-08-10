<template>
    <div ref="slider" class="keen-slider">
      <div class="keen-slider__slide"
       v-for="movie in movies" 
       :key="movie.id"
       >
       <img class="movie-img" :src="movie.img" alt="" @click="openInfoMovie(movie)">
       <div class="streaming">
         <img :src="movie.streaming_logo" alt="" class="streaming-logo"/>
       </div> 
       <div class="movie-title">{{ movie.title }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import "keen-slider/keen-slider.min.css";
  import KeenSlider from "keen-slider";
  
  export default {
    name: "Slider",
    props: {
      movies: {
        type: Array,
        required: true, 
      },
    },
    data() {
      return {
        slider: null, 
      };
    },
    mounted() {
      this.initializeSlider();
    },
    updated() {
     
      this.destroySlider();
      this.initializeSlider();
    },
    beforeDestroy() {
      this.destroySlider();
    },
    methods: {
      initializeSlider() {
        this.$nextTick(() => {
          this.slider = new KeenSlider(this.$refs.slider, {
            loop: true,
            mode: "free-snap",
            slides: {
              perView: 6,
              spacing: 12,
            },
          });
        });
      },
      destroySlider() {
        if (this.slider) {
          this.slider.destroy();
          this.slider = null;
        }
      },
      openInfoMovie(movie) {
      console.log("O id desse filme é o id: " + movie.id );
      this.$router.push({ name: 'ShowMovie', query: { id: movie.id, title: movie.title, img: movie.img, description: movie.description, video: movie.video } });
  },
    },
  };
  </script>
  
<style scoped>
.keen-slider {
  display: flex;

}

.keen-slider__slide {
  width: 100%;
  display: flex;
  background-color: rgba(75, 73, 73, 0.486);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.movie-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 240px;
  cursor: pointer;
  filter: brightness(100%); /* Set the initial brightness to 100% (no change) */
  transition: filter 0.3s ease;
}
.movie-img:hover {
  outline: 2px solid white;
  filter: brightness(70%); 
}

.movie-title {
  margin: 15px 0px;
  font-size: 18px;
  font-weight: 2px;
  text-align: center;
  color: var(--light);
}
.streaming-logo{
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  border-radius: 50%;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 3;
}


/* Other styles (if needed)
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 240px;
  max-height: 100vh;
}

.number-slide {
  background: rgb(64, 175, 255);
  background: linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%);
} */
</style>

  
  