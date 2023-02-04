<template>
        <div class="container">
            <Swiper
        :slides-per-view="slidesPerView"
        :loop="loop"
        :mousewheel="mousewheel"
        :breakpoints="breakpoints"
        >

            <swiper-slide v-for="movie in limitedMovies" :key="movie.id" class="container__slide">
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
import {getMoovieAppreciate} from '../services/MoovieAppreciate.js'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    name: 'MoovieAppreciate',
    data(){
        return{
            movies: [],
            limitedMovies: [],
            loop: true,
            mousewheel: true,
            breakpoints: {
                425 : {
                    slidesPerView: 2,
                    mousewheel: false
                },
                768 : {
                    slidesPerView: 3,
                    mousewheel: false
                },
                1024 : {
                    slidesPerView: 4,
                    mousewheel: false
                },
                1440 : {
                    slidesPerView: 5
                }
            }
        }
    },
    created(){
        getMoovieAppreciate().then(movies => {
            this.movies = movies
            this.limitedMovies = this.movies.slice(0,8)
            console.log(this.limitedMovies)
        })
    }
}

</script>

<style scoped>

.container{
    margin: 48px;
}
.container__slide {
    padding-bottom: 12%;
    position: relative;
}

.container__slide img {
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
}

.container__slide img:hover{
    transform: scale(1.1);
    position: absolute;
    cursor: pointer;
    overflow: visible;
}

/* RESPONSIVE 1024 */
@media only screen and (max-width: 1024px) {

    .container__slide{
        padding-bottom: 20%;
    }

}

/* RESPONSIVE 425 */
@media only screen and (max-width: 425px) {

.container__slide{
    padding-bottom: 50%;
    }
}
</style>