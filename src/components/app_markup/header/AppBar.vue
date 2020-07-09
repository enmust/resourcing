<template>
  <v-app-bar class="app-bar" dark app color="primary2" absolute height="56">
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
        </v-list>
      </v-menu>

      <v-btn text to="/target_groups" exact>Target groups</v-btn>
      <v-btn text to="/news" exact>News</v-btn>
      <v-btn text to="/events" exact>Events</v-btn>
      <v-btn text to="/knowledge_hub" exact>Knowledge hub</v-btn>
      <v-btn text to="/contact" exact>Contact</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    aboutDropdown: false
  }),
  computed: {
    aboutIsActive() {
      let name = this.$route.name;
      return (
        name === "About" ||
        name === "Purpose and objectives" ||
        name === "Partners"
      );
    }
  },
  methods: {
    goToHomePage() {
      if (this.$route.name !== "Home") this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.app-bar {
  margin-top: 30vh !important;
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
