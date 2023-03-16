<template>
  <div class="movie">
    <div class="movie__inner">
      <h2 class="movie__tle">현재 상영작</h2>
      <ul class="movie__list">
        <li class="movie__item" v-for="item in movieData" :key="item.id">
          <router-link class="movie__link" :to="`/movie/${item.id}`">
            <img
              class="movie__img-thum"
              :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`"
              alt=""
            />
            <p class="movie__desc-title">{{ item.original_title }}</p>
            <p class="movie__desc-date">
              {{ item.release_date.split("-")[0] }}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// axios 가져오기
import axios from "axios";
export default {
  data() {
    return {
      movieData: [],
    };
  },
  async created() {
    const result = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=09049b2727410af7ed62bf841b31709c",
    });
    this.movieData = result.data.results;
  },
};
</script>
