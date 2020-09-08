<template>
  <v-app-bar
    class="app-bar"
    dark
    app
    color="primary2"
    absolute
    height="56"
    :style="`margin-top: ${appBarMarginTop}px`"
    ref="appBar"
  >
    <v-app-bar-nav-icon
      @click.stop="$emit('update:drawer')"
      aria-label="Open navigation drawer"
      class="hidden-md-and-up"
    />

    <v-tooltip bottom :disabled="$route.name === 'Home'">
      <template v-slot:activator="{ on }">
        <v-toolbar-title
          v-on="on"
          class="ml-4 hidden-md-and-up font-weight-bold"
          :class="{ 'title-link': $route.name !== 'Home' }"
          style="letter-spacing: 1.1px"
          @click="goToHomePage"
        >
          re-sourcing
        </v-toolbar-title>
      </template>
      <span>Go to home page</span>
    </v-tooltip>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/" exact>Home</v-btn>

      <v-menu v-model="aboutDropdown" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" :class="aboutIsActive ? 'v-btn--active' : ''">
            About
            <v-icon right>{{
              aboutDropdown ? "fas fa-caret-up" : "fas fa-caret-down"
            }}</v-icon>
          </v-btn>
        </template>

        <v-list color="primary2" dark>
          <v-list-item to="/about" exact>
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about/purpose_and_objectives" exact>
            <v-list-item-title>PURPOSE AND OBJECTIVES</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about/partners" exact>
            <v-list-item-title>PARTNERS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about/platform_steering_committee" exact>
            <v-list-item-title>PLATFORM STEERING COMMITTEE</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about/advisory_board" exact>
            <v-list-item-title>ADVISORY BOARD</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text to="/target_groups" exact>Target groups</v-btn>
      <v-btn text to="/news" exact>News</v-btn>
      <v-btn text to="/events" exact>Events</v-btn>

      <v-menu v-model="knowledgeHubDropdown" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
            :class="knowledgeHubIsActive ? 'v-btn--active' : ''"
          >
            Knowledge hub
            <v-icon right>{{
              knowledgeHubDropdown ? "fas fa-caret-up" : "fas fa-caret-down"
            }}</v-icon>
          </v-btn>
        </template>

        <v-list color="primary2" dark>
<!--          <v-list-item to="/knowledge_hub" exact>-->
<!--            <v-list-item-title>KNOWLEDGE HUB</v-list-item-title>-->
<!--          </v-list-item>-->
          <v-list-item to="/knowledge_hub/wiki_on_rs" exact>
            <v-list-item-title>WIKI ON RS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/knowledge_hub/flagship_cases" exact>
            <v-list-item-title>FLAGSHIP CASES</v-list-item-title>
          </v-list-item>
          <v-list-item to="/knowledge_hub/roadmaps" exact>
            <v-list-item-title>ROADMAPS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/knowledge_hub/sector_state_of_plays" exact>
            <v-list-item-title>SECTOR STATE OF PLAYS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/knowledge_hub/project_outputs" exact>
            <v-list-item-title>PROJECT OUTPUTS</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text to="/contact" exact>Contact</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { debounce } from "lodash";

export default {
  name: "AppBar",
  data: () => ({
    aboutDropdown: false,
    knowledgeHubDropdown: false,
    appBarMarginTop: 358
  }),
  computed: {
    aboutIsActive() {
      let name = this.$route.name;
      return (
        name === "About" ||
        name === "Purpose and objectives" ||
        name === "Partners"
      );
    },

    knowledgeHubIsActive() {
      let name = this.$route.name;
      return (
        name === "Knowledge hub" ||
        name === "Wiki on rs" ||
        name === "Flagship cases" ||
        name === "Roadmaps" ||
        name === "Sector state of plays"
      );
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  updated: debounce(function() {
    this.$nextTick(() => {
      // console.log("handleResize");
      this.handleResize();
    });
  }, 250),
  beforeDestroy() {
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    goToHomePage() {
      if (this.$route.name !== "Home") this.$router.push({ path: "/" });
    },
    handleResize() {
      const TOOLBAR_MARGIN_TOP = 38;
      let video = document.getElementsByClassName("project-video");

      if (video && window.innerWidth < 960) {
        let videoHeight = video[0].clientHeight;
        this.appBarMarginTop = videoHeight + TOOLBAR_MARGIN_TOP;
      } else {
        this.appBarMarginTop = 358;
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .app-bar {
    margin-top: 358px !important;
  }
}

.title-link {
  opacity: 1;
  transition: opacity 200ms ease-out;
}

.title-link:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 200ms ease-in;
}
</style>
