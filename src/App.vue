<template>
  <v-app>
    <top-toolbar />

    <app-header />

    <v-main class="main">
      <v-container fluid class="primary2 pa-0">
        <v-sheet
          color="accent3"
          height="38"
          width="100%"
          elevation="4"
        ></v-sheet>

        <router-view class="pa-3" />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "./components/app_markup/AppHeader";
import AppFooter from "./components/app_markup/AppFooter";
import TopToolbar from "./components/app_markup/TopToolbar";
export default {
  name: "App",
  components: { TopToolbar, AppFooter, AppHeader }
};
</script>

<style>
@font-face {
  font-family: "CalibriBold";
  src: url("./assets/fonts/calibri_bold.TTF");
}

@font-face {
  font-family: "CalibriItalic";
  src: url("./assets/fonts/calibri_italic.ttf");
}

@font-face {
  font-family: "CalibriLight";
  src: url("./assets/fonts/calibri_light.ttf");
}

@font-face {
  font-family: "CalibriRegular";
  src: url("./assets/fonts/calibri_regular.ttf");
}

.v-application {
  font-family: "CalibriRegular", sans-serif !important;
  -webkit-font-smoothing: antialiased;
}

.container {
  height: 100%;
}

#app .text-h1,
#app .text-h2,
#app .text-h3,
#app .text-h4,
#app .text-h5,
#app .text-h6,
#app .text-subtitle-1,
#app .text-subtitle-2,
#app .text-body-1,
#app .text-body-2,
#app .text-button,
#app .text-caption,
#app .text-overline {
  font-family: "CalibriRegular", sans-serif !important;
}
</style>
