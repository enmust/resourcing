<template>
  <div class="target-groups">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div
          class="text-h4 primary--text font-weight-bold mt-2 d-flex justify-center"
        >
          Industry sectors
        </div>

        <v-row no-gutters>
          <v-col class="mx-auto" cols="12" sm="11" md="10" lg="8" xl="6">
            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                3 Sectors for achieving a sustainable and carbon-neutral Europe
              </v-card-title>

              <v-card-text class="text-body-1">
                The European Green Deal marks Europe’s commitment to become the
                world’s first climate-neutral continent by 2050.
                <br />
                <br />
                RE-SOURCING will develop visions & roadmaps for responsible
                sourcing in the three sectors of Renewable Energy, Mobility and
                Electric and Electronic Equipment to guarantee a sustainable
                transition based on environmentally friendly, socially equitable
                and economically profitable sourcing in global mineral value
                chains.
              </v-card-text>
            </v-card>

            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                The RE-SOURCING Sector Roadmap approach
              </v-card-title>

              <v-card-text class="text-body-1">
                RE-SOURCING will develop sectoral
                <b class="primary--text">roadmaps</b> for three key European
                industrial sectors describing the current situation (“<b
                  class="primary--text"
                  >state of play</b
                >”), the vision (“<b class="primary--text"
                  >vision for the future</b
                >”) and key actions needed to transverse the distance between
                now and an improved future situation for the responsible
                sourcing (RS) of raw materials (“<b class="primary--text"
                  >milestone achievements</b
                >”).
              </v-card-text>
            </v-card>

            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                Why 3 sectors
              </v-card-title>

              <v-card-text class="text-body-1">
                These three sectors represent essential priorities in the
                European long-term vision: the Mobility sector for clean
                mobility and Renewable energy for the fully decarbonised energy
                supply. The EEE-sector reflects the relevant questions on the
                conflict mineral regulation. Their contribution is essential to
                achieving the targets that have been set by the EU Green Deal.
                To ensure that the ‘output’ from these sectors contributes to
                the sustainability agenda, responsible sourcing practices within
                these sectors need to be strengthened.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <v-card-title
                style="height: 96px;"
                class="accent2--text d-flex justify-center font-weight-bold"
                >MOBILITY</v-card-title
              >

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="toggleCardInfo('mobility')"
                  class="pa-2 mx-3 mb-3"
                  color="accent2"
                  :elevation="hover ? 24 : 4"
                  :class="
                    hover ? 'elevation-24-accent2' : 'elevation-4-accent2'
                  "
                  hover
                >
                  <v-img
                    :src="require('../assets/img/mobility.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <v-card-title
                style="height: 96px;"
                class="accent--text d-flex justify-center font-weight-bold"
                >RENEWABLE ENERGY</v-card-title
              >

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="toggleCardInfo('energy')"
                  class="pa-2 mx-3 mb-3"
                  :elevation="hover ? 24 : 4"
                  color="accent"
                  :class="hover ? 'elevation-24-accent' : 'elevation-4-accent'"
                  hover
                >
                  <v-img
                    :src="require('../assets/img/renewable_energy.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <v-card-title
                class="accent3--text d-flex justify-center font-weight-bold"
                style="word-break: break-word; height: 96px"
                >ELECTRONICS & ELECTRONIC EQUIPMENT</v-card-title
              >

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="toggleCardInfo('electronics')"
                  class="pa-2 mx-3 mb-3"
                  :elevation="hover ? 24 : 4"
                  color="accent3"
                  :class="
                    hover ? 'elevation-24-accent3' : 'elevation-4-accent3'
                  "
                  hover
                >
                  <v-img
                    :src="require('../assets/img/electronics.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>

        <v-row id="card-info">
          <v-col cols="12" v-show="showMobility">
            Todo: Add mobility text
          </v-col>

          <v-col cols="12" v-show="showEnergy">
            Todo: Add energy text
          </v-col>

          <v-col cols="12" v-show="showElectronics">
            Todo: Add electronics text
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TargetGroups",
  data: () => ({
    showMobility: true,
    showEnergy: false,
    showElectronics: false
  }),
  methods: {
    toggleCardInfo(name) {
      this.$vuetify.goTo("#card-info");
      if (name === "mobility") {
        this.showMobility = true;
        this.showEnergy = false;
        this.showElectronics = false;
      } else if (name === "energy") {
        this.showMobility = false;
        this.showEnergy = true;
        this.showElectronics = false;
      } else {
        this.showMobility = false;
        this.showEnergy = false;
        this.showElectronics = true;
      }
    }
  }
};
</script>

<style scoped>
.elevation-4-accent {
  box-shadow: 0px 2px 4px -1px rgba(151, 46, 99, 0.4),
    0px 4px 5px 0px rgba(151, 46, 99, 0.28),
    0px 1px 10px 0px rgba(151, 46, 99, 0.24) !important;
}

.elevation-4-accent2 {
  box-shadow: 0px 2px 4px -1px rgba(167, 179, 42, 0.4),
    0px 4px 5px 0px rgba(167, 179, 42, 0.28),
    0px 1px 10px 0px rgba(167, 179, 42, 0.24) !important;
}

.elevation-4-accent3 {
  box-shadow: 0px 2px 4px -1px rgba(248, 168, 70, 0.4),
    0px 4px 5px 0px rgba(248, 168, 70, 0.28),
    0px 1px 10px 0px rgba(248, 168, 70, 0.24) !important;
}

.elevation-24-accent {
  box-shadow: 0px 11px 15px -7px rgba(151, 46, 99, 0.4),
    0px 24px 38px 3px rgba(151, 46, 99, 0.28),
    0px 9px 46px 8px rgba(151, 46, 99, 0.24) !important;
}

.elevation-24-accent2 {
  box-shadow: 0px 11px 15px -7px rgba(167, 179, 42, 0.4),
    0px 24px 38px 3px rgba(167, 179, 42, 0.28),
    0px 9px 46px 8px rgba(167, 179, 42, 0.24) !important;
}

.elevation-24-accent3 {
  box-shadow: 0px 11px 15px -7px rgba(248, 168, 70, 0.4),
    0px 24px 38px 3px rgba(248, 168, 70, 0.28),
    0px 9px 46px 8px rgba(248, 168, 70, 0.24) !important;
}
</style>
