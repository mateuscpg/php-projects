<template>
    <div ref="slider" class="keen-slider">
      <div class="keen-slider__slide" v-for="movie in movies" :key="movie.id">
        <img :src="movie.img" alt="">
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
        required: true, // Make the movies prop required
      },
    },
    data() {
      return {
        slider: null, // Initialize the slider as null
      };
    },
    mounted() {
      this.initializeSlider();
    },
    updated() {
      // If the movies prop changes, reinitialize the slider
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
              spacing: 15,
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
    },
  };
  </script>
  
  <style>
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

.keen-slider__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 240px;
}

.movie-title {
  margin: 15px 0px;
  font-size: 18px;
  font-weight: 2px;
  text-align: center;
  color: var(--light);
}

/* Other styles (if needed) */
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
}
</style>

  
  