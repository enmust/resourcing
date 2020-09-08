<template>
  <div class="roadmaps white--text">
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
          Roadmaps
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify">
            To address responsible sourcing in a holistic manner, such that
            collective synergies of industry, policy and civil society can be
            stimulated, RE-SOURCING will develop three roadmaps for three key EU
            industrial sectors: renewable energy (RES), mobility (MS) and
            electric and electronic equipment (EEES). These roadmaps will form
            the basis for identifying actions required from businesses and the
            general shape of EU framework conditions for supporting RS. Based on
            this, the roadmaps will explore future EU policy needs to offer EU
            businesses incentives to induce the operationalisation of RS
            practices.
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(event, index) in projectEvents"
            :key="index"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="pa-2 mx-3 my-3" :elevation="hover ? 12 : 4" hover>
                <div class="d-flex justify-center" style="min-height: 200px;">
                  <div
                    class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                  >
                    {{ event.title }}
                  </div>
                </div>

                <v-card-actions class="pa-0">
                  <v-img
                    :src="
                      require('../assets/logos/project_logo/re-sourcing_transparent.png')
                    "
                    max-width="125"
                  >
                  </v-img>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify">
            More information will be added as the RE-SOURCING project
            progresses.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div></template
>

<script>
export default {
  name: "Roadmaps",
  data: () => ({
    projectEvents: [
      {
        title: "Training and learning materials for practitioners"
      },
      {
        title: "Sectors"
      },
      {
        title: "Roadmaps"
      }
    ]
  })
};
</script>

<style scoped></style>
