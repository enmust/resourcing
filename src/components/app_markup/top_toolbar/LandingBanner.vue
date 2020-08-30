<template>
  <div class="d-flex landing-banner" no-gutters>
    <div class="hidden-logo pa-3 align-self-center">
      <v-img
        class="project-logo"
        contain
        :src="
          require('../../../assets/logos/project_logo/re-sourcing_transparent.png')
        "
      ></v-img>
    </div>

    <div class="custom-flex-grow-1"></div>

    <div class="project-video">
      <video autoplay muted>
        <source
          :src="require('../../../assets/animation/animation_960x320.mp4')"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingBanner"
};
</script>

<style scoped>
.landing-banner,
.landing-banner > div {
  max-height: 320px;
}

.project-logo {
  max-height: 296px;
  max-width: 456px;
}

.project-video,
video {
  max-height: 320px;
}

@media only screen and (max-width: 960px) {
  video {
    object-position: center;
    height: 100%;
    object-fit: cover;
  }
}

@media (min-width: 960px) and (max-width: 1439px) {
  video {
    object-fit: cover;
  }
}

@media only screen and (max-width: 1439px) {
  .hidden-logo {
    display: none !important;
  }

  video {
    width: 100%;
  }

  .project-video {
    width: 100%;
  }
}

@media only screen and (min-width: 1440px) {
  .custom-flex-grow-1 {
    flex-grow: 1 !important;
  }
}
</style>
