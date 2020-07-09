<template>
  <div class="about" v-if="$route.name === 'About'">
    About
  </div>
  <router-view v-else />
</template>
