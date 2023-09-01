<template>
    <div ref="slider" class="keen-slider">
      <div class="keen-slider__slide slides"
       v-for="movie in movies" 
       :key="movie.id"
       >
          <img class="movie-img" :src="movie.image" alt="" @click="openInfoMovie(movie)">
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
              perView: 8,
              spacing: 8,
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
      this.$router.push('/show-movie/'+movie.id);
    },
    },
  };
  </script>
  
<style scoped>
.keen-slider {
  display: flex;
  padding: 2px;
}

.keen-slider__slide {
  width: 100%;
  display: flex;
  border-radius: 5px;
  background-color: rgba(75, 73, 73, 0.486);
  /* background-color: transparent;
  outline: 1px solid white; */
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}
/* .keen-slider__slide.slides
{
  transition: background-color 0.3s linear, outline 0s linear, color 0.1s linear;
} */
.keen-slider__slide.slides:hover {
  background-color: rgba(75, 73, 73, 0.8); /* Cor com maior opacidade */
  opacity: 1; /* Mostra o cartão completo */
  outline: 2px solid var(--blue);
  transform: scale(1.05) translateY(-5px);
}

.movie-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 260px;
  cursor: pointer; 
  filter: brightness(100%); 
  transition: filter 0.3s ease;
}
.movie-img:hover {
  /* outline: 2px solid var(--blue); */
  filter: brightness(70%); 
}

.movie-title {
  margin: 12px 0px;
  font-size: 18px;
  font-weight: 2px;
  color: var(--light);
}
.streaming-logo{
  width: 30px; 
  height: 30px; 
  border-radius: 50%;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 3;
}

</style>

  
  