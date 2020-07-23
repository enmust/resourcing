<template>
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
          WIKI on RS
        </div>

        <v-row>
          <v-col cols="12" class="text-body-1">
            Listing of initiatives, networks and classification.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "WikiOnRs"
};
</script>

<style scoped></style>
