<template>
  <div class="masthead">
    <h1>The Dark Knight</h1>
    <p>Batman, le lieutenant Gordon et le procureur Harvey Dent s'allient contre le Joker, le génie du crime au maquillage macabre qui terrorise Gotham City.</p>
    <video id="background-video" autoplay loop muted ref="video" poster="@/assets/img/batman.jpeg" alt="Bande annonce du film The Dark Knight">
      <source src="@/assets/video/batman.mp4" type="video/mp4">
    </video>
    <img class="playvideo" src="@/assets/svg/play.svg" alt="Bouton play pour lancer le film">
  </div>
  <section class="section__movie">
    <h2>Appréciés sur Netflix</h2>
    <MoovieLikes />
  </section>

  <section class="section__movie">
    <h2>Notre sélection pour vous</h2>
    <MoovieKids />
  </section>

  <section class="section__movie">
    <h2>Les films de l'année</h2>
    <MoovieBest />
  </section>

</template>


<script>

import MoovieLikes from '@/components/MoovieLikes.vue'
import MoovieKids from '@/components/MoovieKids.vue'
import MoovieBest from '@/components/MoovieBest.vue'

export default {
  components: {
    MoovieLikes,
    MoovieKids,
    MoovieBest
  },
  data(){
    return {
      playVideo: true
    }
  },
  mounted(){
    const videoEl = this.$refs.video
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.playVideo = true;
        } else {
          this.playVideo = false
        }
      })
    })
    observer.observe(videoEl);
  }
}

</script>

<style scoped>

.masthead{
  position: relative;
  padding-top: 400px;
  padding-bottom: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 20%;
}

.masthead video{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  object-fit: cover;
  z-index: -1;
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

.section__movie{
  margin: 80px 0;
}

.section__movie h2 {
  font-size: 32px;
  margin: 48px;
  color:#fff;
  font-family: 'NetflixSans-Medium';
}

</style>
