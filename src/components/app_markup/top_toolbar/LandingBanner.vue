<template>
  <v-row class="landing-banner" no-gutters>
    <v-col class="hidden-xs-only pa-3" sm="4">
      <v-img
        class="project-logo"
        contain
        :src="
          require('../../../assets/logos/project_logo/re-sourcing_1400px.jpg')
        "
      ></v-img>
    </v-col>
    <v-col cols="12" sm="8">
      <video class="landing-banner" width="100%" autoplay loop muted>
        <source
          :src="require('../../../assets/animation/logo_animation.mp4')"
          type="video/mp4"
        />
      </video>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LandingBanner"
};
</script>

<style scoped>
.landing-banner,
.landing-banner > div {
  height: calc(30vh - 38px);
}

.project-logo {
  height: calc(30vh - 62px);
}

video {
  object-fit: cover;
}
</style>
