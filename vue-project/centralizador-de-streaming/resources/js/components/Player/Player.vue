<template>
  <div class="player">
    <div class="player__sizer">
      <video controls>
        <source type="video/mp4" :src="movies.video">
      </video>
    </div>
  </div>
</template>

<script>
import "./Player.scss";
export default {
    name: "Player",
    props: {
    movies: {
      type: Object,
      required: true,
    },
  },
 
}
</script>

<style>

</style>