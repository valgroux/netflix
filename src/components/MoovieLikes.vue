<template>
        <div class="likes__container">
            <Swiper
        :slides-per-view="4"
        :space-between="24"
        :loop="true"
        :mousewheel="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >

            <swiper-slide v-for="movie in limitedMovies" :key="movie.id" class="likes__movies-content">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Image du film">
            </swiper-slide>

            </Swiper>
        </div>

</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css'

// Import API Call
import {getPopularMovies} from '../services/LikesMoovieServices.js'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    name: 'MoovieLikes',
    data(){
        return{
            movies: [],
            limitedMovies: []
        }
    },
    setup(){
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        }
        return {
            onSwiper,
            onSlideChange,
        }
    },
    created(){
        getPopularMovies().then(movies => {
            this.movies = movies
            this.limitedMovies = this.movies.slice(0,8)
        })
    }
}

</script>

<style scoped>

    .likes__container{
        margin: 48px;
    }
    .likes__movies-content{
        width: 452px;
        height: 678px;
        overflow: hidden;
    }

    .likes__movies-content img {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

</style>