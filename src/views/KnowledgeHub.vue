<template>
  <div class="knowledge-hub transparent" v-if="$route.name === 'Knowledge hub'">
    <div class="wiki_on_rs white--text">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="py-3"
          :class="{
            'px-5': $vuetify.breakpoint.smAndDown,
            'px-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <div class="text-h5 font-weight-bold mt-2">
            Knowldege hub
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
export default {
  name: "KnowledgeHub"
};
</script>

<style scoped></style>
