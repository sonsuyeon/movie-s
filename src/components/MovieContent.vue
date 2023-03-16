<template>
  <div class="movieDetail__wrap">
    <div class="movieDetail__inner">
      <div class="movieDetail__txt">
        <h2 class="movieDetail__tle">
          {{ movie.title }}
          <span class="movieDetail__date">
            {{ movie.release_date.split("-")[0] }}
          </span>
        </h2>
        <div class="movieDetail__desc">
          <span class="movieDetail__desc-genre">
            {{ movie.genres[0].name + " / " + movie.genres[1].name }}ㆍ
          </span>
          <span class="movieDetail__desc-runtime">
            ( {{ movie.runtime }} m )
          </span>
          <span class=""></span>
          <!-- <span v-if="movieDetail.homepage" class="">ㆍ</span> -->
          <p class="movieDetail__desc-summary">
            {{ movie.overview }}
          </p>
          <span class="movieDetail__desc-time"></span>
        </div>
      </div>
      <div class="movieDetail__poster">
        <img
          :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
          alt="movie poster"
        />
      </div>
    </div>
    <p class="movieDetail__bg">
      <img
        :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
        alt="movie poster"
      />
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detailPage",
  prop: {},
  data() {
    return {
      movie: "",
    };
  },
  created() {
    this.movie = this.$route.params.id;
    this.getMoviecontent();
  },
  methods: {
    async getMoviecontent() {
      const movieCont = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.movie}?api_key=09049b2727410af7ed62bf841b31709c`
      );
      this.movie = movieCont.data;
    },
  },
};
</script>
