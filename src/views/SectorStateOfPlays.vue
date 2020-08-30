<template>
  <div class="sector_state_of_plays white--text">
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
          Sector state of plays
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify">
            Better understanding of the state-of-play in three raw material
            based sectors: Renewable energy, mobility and electronics and
            electric equipment. State-of-plays in every three sector describes
            existing responsible sourcing initiatives in the EU and globally.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify">
            More information will be added as the RE-SOURCING project progresses.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div></template
>

<script>
export default {
  name: "SectorStateOfPlays"
};
</script>

<style scoped></style>
