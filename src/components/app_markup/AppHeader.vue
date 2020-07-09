<template>
  <div class="app-header">
    <navigation-drawer :drawer="drawer" @update:drawer="drawer = $event" />

    <app-bar @update:drawer="drawer = !drawer" />
  </div>
</template>

<script>
import NavigationDrawer from "./header/NavigationDrawer";
import AppBar from "./header/AppBar";
export default {
  name: "AppHeader",
  components: { AppBar, NavigationDrawer },
  data: () => ({
    drawer: false
  })
};
</script>

<style scoped></style>
