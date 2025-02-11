<template>
  <div class="hero" @keyup.enter="nextSlide" @keyup.space="lastSlide" @keyup.right="nextSlide" @keyup.left="previousSlide" tabindex="0">
    <carousel ref="carousel" :per-page="1" :navigation-enabled="true" :pagination-enabled="true">
      <slide>
        <h2>Wilkommen bei der Space University!</h2>
        Erkunde das Universum des Wissens mit uns!
        <p>Hier erhälst du eine kurze Einführung zu der Nutzung der Tools hier auf der Website der Space University.</p>
        <img src="@/assets/img/introduction/example.png" alt="Example Image" />
      </slide>
      <slide>
        <h2>Die verschiedenen Abschnitte dieser Website under Navigationsleiste</h2><br/>
        <p>Die Website der Space University liefert dir verschiedene Tools, die für die Organisation deines Studiums notwendig und hilfreich sind.<br/>
          Hier eine kurze Übersicht über die verschiedenen Abschnitte, die links in der Navbar aufgelsitet sind:
        </p>
        <img src="@/assets/img/introduction/Navbar02.png" alt="Navbar Image 02" class="navbar-image02" />
      </slide>
      <slide>
        <h2>Wie zu verwenden</h2>
        <p>Navigieren Sie durch das Menü, um verschiedene Abschnitte und Funktionen zu finden.</p>
      </slide>
      <slide>
        <h2>Loslegen</h2>
        <p>Melden Sie sich an oder loggen Sie sich ein, um Ihre Reise mit der Space University zu beginnen.</p>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 1);
    },
    previousSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage - 1);
    }
  }
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 20px;
  outline: none;
}

.carousel {
  width: 80%;
  margin: 0 auto;
}

.slide {
  padding: 20px;
}


.navbar-image02 {
  width: 16%; /* Adjust the percentage as needed */
  height: auto;
  vertical-align: top; /* Align images to the top */
  position: static;
  right: 1000;
  margin-right: 1200px; /* Leave a margin of 50px */
}
</style>