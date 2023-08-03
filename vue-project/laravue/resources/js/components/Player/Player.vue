<template>
  <div class="player">
    <div class="player__sizer">
        <video controls>
            <source type="video/mp4" src="https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"/>
        </video>
    </div>
  </div>
</template>

<script>
import "./Player.scss";
export default {
    name: "Player",
    movies: {
      type: Array,
      required: true, // Make the movies prop required
    },
}
</script>

<style>

</style>