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
          <v-col cols="12" md="8" lg="7" class="text-body-1">
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
            sm="4"
            v-for="(event, index) in projectEvents"
            :key="index"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="pa-2 mx-3 my-3" :elevation="hover ? 12 : 4" hover>
                <v-img
                  :src="
                    require('../assets/logos/project_logo/re-sourcing_500px.jpg')
                  "
                  max-width="500"
                >
                </v-img>

                <v-card-title
                  class="primary--text font-weight-bold justify-center"
                  >{{ event.title }}</v-card-title
                >

                <v-card-text class="text-body-1">
                  {{ event.text }}
                </v-card-text>
              </v-card>
            </v-hover>
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
        title: "KNOWLEDGES for Experts - training materials/learning materials",
        showInfo: false,
        text: "Training and learning materials for practitioners."
      },
      {
        title: "SECTORS",
        showInfo: false,
        text: "Training and learning materials for practitioners."
      },
      {
        title: "ROADMAPS",
        showInfo: false,
        text: "Training and learning materials for practitioners."
      }
    ]
  })
};
</script>

<style scoped></style>
