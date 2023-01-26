<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="menu" :class="{sticky: isSticky}">
    <div class="header__logo">
      <img alt="Logo Netflix" src="@/assets/logo/logo_netflix.png" width="100" height="50" />
    </div>

    <div class="header__menu">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/series">Séries</RouterLink>
          <RouterLink to="/moovie">Films</RouterLink>
          <RouterLink to="/news">Nouveautés les plus regardés</RouterLink>
          <RouterLink to="/list">Ma liste</RouterLink>
          <RouterLink to="/explore">Explorer par langue</RouterLink>
        </nav>
      </div>
    </div>
  </header>

<RouterView />

</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
    }
  },
  mounted() {
    const menu = document.querySelector('header');
    menu.classList.toggle('sticky', window.scrollY > 0)

  },
}
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
Utiliser un plugin Vue.js : Vous pouvez utiliser un plugin Vue.js pour gérer le comportement de menu collant. Il existe de nombreux plugins disponibles sur Internet, tels que vue-sticky-



<style scoped>
@import url(./assets/css/main.css);

header{
  font-family: 'Netflix-Light';
  display: flex;
  align-items: center;
  padding: 10px 0;
  max-width: 1800px;
  background-color: #141414;
  margin: auto 48px;
  /* background-color: green; */
}

.header__logo {
  margin-right: 40px;
}
nav{
  display: flex;
  gap: 24px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s
}

nav a:hover{
  color: rgb(208, 208, 208);
}

.sticky{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

/* .test{
  background-color: red;
  height: 4000px;
} */

</style>
