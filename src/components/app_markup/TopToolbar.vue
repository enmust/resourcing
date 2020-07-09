<template>
  <div class="top-toolbar">
    <v-toolbar color="primary3" dense height="38" />

    <landing-banner />
  </div>
</template>

<script>
import LandingBanner from "./top_toolbar/LandingBanner";
export default {
  name: "TopToolbar",
  components: { LandingBanner }
};
</script>

<style scoped></style>
