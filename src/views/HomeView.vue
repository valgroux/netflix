<template>
  <div class="masthead">
    <h1>The Dark Knight</h1>
    <p>Batman, le lieutenant Gordon et le procureur Harvey Dent s'allient contre le Joker, le génie du crime au maquillage macabre qui terrorise Gotham City.</p>
    <img class="playvideo" src="@/assets/svg/play.svg" @mouseover="playVideo">


  </div>

  <MoovieLikes />

</template>


<script>
import MoovieLikes from '@/components/MoovieLikes.vue'
import 'swiper/css'


export default {
  components: {
    MoovieLikes,
  },
}

</script>


<style scoped>

.masthead{
  padding-top: 400px;
  padding-bottom: 100px;
  background-image:linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1727284663865546) 100%), url('../assets/img/batman.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 20%;
}

.masthead h1{
  color: #fff;
  font-family: 'NetflixSans-Bold';
  font-size: 54px;
  margin: 24px 48px;
}

.masthead p {
  color: #fff;
  font-family: 'NetflixSans-Regular';
  font-size: 24px;
  line-height: calc(24px * 1.4);
  margin: auto 48px;
  width: 40%;
}

.masthead img{
  width: 64px;
  margin: 24px 48px;
  cursor: pointer;
}

</style>
