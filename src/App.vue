<template>
  <v-app>
    <top-toolbar />

    <app-header />

    <v-main class="main">
      <v-container fluid class="pa-0" :class="bodyColor">
        <v-sheet
          color="accent3"
          height="38"
          width="100%"
          class="drop-shadow"
        ></v-sheet>

        <router-view :class="{ 'pa-3': addPaddingToRouteView }" />

        <v-sheet
          v-if="showBottomSheet"
          color="accent3"
          height="38"
          width="100%"
          class="drop-shadow"
        ></v-sheet>
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
  components: { TopToolbar, AppFooter, AppHeader },
  computed: {
    bodyColor() {
      let name = this.$route.name;
      if (
        name === "Events" ||
        name === "Home" ||
        name === "About" ||
        name === "Purpose and objectives" ||
        name === "Partners" ||
        name === "Platform steering committee" ||
        name === "Advisory board"
      )
        return "primary5";
      else if (name === "Target groups") return "primary4";
      else return "primary2";
    },

    showBottomSheet() {
      let name = this.$route.name;
      return name === "Events";
    },

    addPaddingToRouteView() {
      const name = this.$route.name;
      return (
        name !== "Home" &&
        name !== "About" &&
        name !== "Purpose and objectives" &&
        name !== "Partners" &&
        name !== "Platform steering committee" &&
        name !== "Advisory board" &&
        name !== "Knowledge hub" &&
        name !== "Wiki on rs" &&
        name !== "Flagship cases" &&
        name !== "Roadmaps" &&
        name !== "Sector state of plays" &&
        name !== "Project outputs"
      );
    }
  }
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

.bottom-sheet {
  -webkit-box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) !important;
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

.text-h7 {
  font-size: 1.125rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
}

.drop-shadow {
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.4));
}
</style>
