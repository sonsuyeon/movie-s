<template>
  <div class="movie">
    <div class="movie-list">
      <div v-for="item in movieList" :key="item.id">
        <router-link :to="`/movie/${item.id}`">
          <img
            :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`"
            alt=""
          />
          <p>{{ item.original_title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
    };
  },
  async created() {
    const result = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=3d6c850fedd64a507e51cfb2335f305c",
    });
    this.movieList = result.data.results;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/init.scss";
</style>
