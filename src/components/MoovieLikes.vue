<template>
    <section class="likes">
        <h2>Appréciés sur Netflix</h2>
        <div class="likes__movies">
            <div class="likes__movies-content"></div>
            <div class="likes__movies-content"></div>
            <div class="likes__movies-content"></div>
            <div class="likes__movies-content"></div>
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper'


export default {
    name: 'MoovieLikes'
}

</script>

<style scoped>

    .likes h2 {
        font-size: 32px;
        margin: 48px;
        color:#fff;
        font-family: 'NetflixSans-Medium';
    }

    .likes__movies{
        display: flex;
        gap: 40px;
        margin: 48px;
    }
    .likes__movies-content{
        background-color: red;
        width: 300px;
        height: 200px;
    }

</style>