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
                <h3>Descrição:</h3>
                <p>{{ movie.description }}</p>
              </div>
              <div class="button-container">
                <button class="play-button" @click="openMovie(movie)">
                  <span class="material-icons">play_arrow</span>Play</button>
                <button class="info-button">More info</button>
              </div>
            </div>
          </div>

          <img :src="movie.img" alt="" />

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
      this.$router.push('/show-movie');
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
  cursor: pointer;
  filter: brightness(0.8);
}

/* Overlay styles */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 45%; /* Adjust the width of the overlay to fit your needs */
  height: 100%;
  background: linear-gradient(to right, black, rgba(0, 0, 0, 0.0)); /* Less transparent on the right */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
}

.movie-info {
  /* text-align: center; */
}
.movie-title h1 {
  font-size: 80px;
  text-align: center;
  margin-top: 2rem;
}
.movie-description p{
  color: #c5c5c5;
}
.button-container{
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.play-button,
.info-button {
  font-size: 20px;
  padding: 0.4rem 1.2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.play-button {
  color: black;
  background-color: white;
}

.info-button {
  color: #fff;
  background-color: rgba(128, 128, 128, 0.5);
  position: relative; /* Add position relative to enable pseudo-element positioning */
}
.play-button:hover{
outline: 2px solid #ccc;
}
.info-button:hover{
  outline: 2px solid #fff;
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
  background: var(--blue);
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
