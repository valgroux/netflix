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
    <MoovieAppreciate />
  </section>

  <section class="section__movie">
    <h2>Notre sélection pour vous</h2>
    <MoovieForYou />
  </section>

  <section class="section__movie">
    <h2>Les films de l'année</h2>
    <MoovieOfYear />
  </section>

</template>


<script>

import MoovieAppreciate from '@/components/MoovieAppreciate.vue'
import MoovieForYou from '@/components/MoovieForYou.vue'
import MoovieOfYear from '@/components/MoovieOfYear.vue'

export default {
  components: {
    MoovieAppreciate,
    MoovieForYou,
    MoovieOfYear
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
  margin: 56px 0;
  overflow: visible;
}

.section__movie h2 {
  font-size: 32px;
  margin: 48px;
  color:#fff;
  font-family: 'NetflixSans-Medium';
}

/* RESPONSIVE 840PX */
@media only screen and (max-width: 840px) {
  .masthead{
    padding-top: 100px;
  }
  .masthead p {
    width: 80%;
  }
}

</style>
