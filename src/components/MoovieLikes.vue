<template>
    <section class="likes">
        <h2>Appréciés sur Netflix</h2>

        <Swiper
        :slides-per-view="4"
        :space-between="24"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >

        <swiper-slide v-for="movie in limitedMovies" :key="movie.id" class="likes__movies-content">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Image du film">
        </swiper-slide>

        </Swiper>

        <!-- <div class="likes__movies">
            <div v-for="movie in limitedMovies" :key="movie.id" class="likes__movies-content">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Image du film">
            </div>
        </div> -->

    </section>
</template>

<script>
import axios from 'axios';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css'

export default {
    components: {
        Swiper,
        SwiperSlide
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
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('Slide change');
        }
        return {
            onSwiper,
            onSlideChange,
        }
    },
    created(){
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: 'bb8707cd4517d45507a596bcac3064a4'
            }
        })
        .then(response => {
            this.movies = response.data.results
            this.limitedMovies = this.movies.slice(0,8)
        })
        .catch(error => {
            console.log(error)
        })

    },  
    mounted(){
        
    }
}

</script>

<style scoped>

    .likes h2 {
        font-size: 32px;
        margin: 48px;
        color:#fff;
        font-family: 'NetflixSans-Medium';
    }
    .likes__movies-content{
        width: 300px;
        height: 200px;
        overflow: hidden;
    }

    .likes__movies-content img {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

</style>