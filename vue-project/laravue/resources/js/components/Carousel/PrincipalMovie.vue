<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide" v-for="movie in movies" :key="movie.id">

          <div class="image-overlay">
            <div class="movie-info">
              <div class="movie-title">
                <h1>{{ movie.title }}</h1>
              </div>
              <div class="movie-description">
                <p>{{ movie.description }}</p>
              </div>
              <div class="button-container">
                <button class="play-button">PLAY</button>
                <button class="info-button">INFO</button>
              </div>
            </div>
          </div>

          <img :src="movie.img" alt="" @click="openMovie(movie.id)" />

        </div>
      </div>
    </div>
    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
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
  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : [];
    },
  },
  data() {
    return {
      current: 0,
      slider: null,
    };
  },
  methods: {
    openMovie(id) {
      console.log("O id desse filme é o id: " + id);
    },
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: 0,
      slideChanged: (s) => {
        this.current = s.track.details.rel;
      },
    });
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style scoped>
.keen-slider {
  display: flex;
  height: 700px;
  width: 100%;
  z-index: 0;
}
.keen-slider__slide {
  width: 100%;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Add position relative to enable overlay positioning */
}

.keen-slider__slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

/* Overlay styles */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Adjust the width of the overlay to fit your needs */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent dark background */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
}

.movie-info {
  text-align: center;
}
.button-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.play-button, .info-button{
  padding: 0.5rem;
  border-radius: 6px;
  margin: 5px;
  color: black;
  background-color: white;
}


.navigation-wrapper {
  position: relative;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}
.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: #000;
}
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}
.arrow--left {
  left: 5px;
}
.arrow--right {
  left: auto;
  right: 5px;
}
.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}
</style>
