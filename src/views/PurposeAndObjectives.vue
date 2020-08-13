<template>
  <div class="purpose-and-objectives text-justify">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 primary--text font-weight-bold mt-2">
          Purpose and Objectives
        </div>

        <v-row no-gutters>
          <v-col cols="12" lg="6">
            <v-card flat color="transparent">
              <v-card-title
                class="primary--text font-weight-bold"
                style="word-break: break-word;"
                >Major RE-SOURCING outcomes are tailored to achieve the
                following impacts:</v-card-title
              >

              <div class="text-h7 px-4 pb-4">
                <ul>
                  <li>
                    Built a vibrant and active community, consisting of
                    ambitious and future-oriented businesses, policymakers and
                    international experts with the commitment to implement
                    RE-SOURCING best practices and inspire future RS initiatives
                  </li>
                  <li>
                    Established three EU sector roadmaps for wider adoption to
                    create effective RS framework conditions that will carry
                    future competitiveness and commitment of key European
                    players
                  </li>
                  <li>
                    Trained leaders in business, politics and civil society on
                    what is required from them in order to achieve Responsible
                    Sourcing
                  </li>
                  <li>
                    Created a level playing field of RS on the global level by
                    promoting RS principles in global agendas and international
                    initiatives across 3 world regions (SSA, Asia, LA)
                  </li>
                </ul>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="6">
            <v-card flat color="transparent">
              <v-card-title class="primary--text font-weight-bold"
                >PROJECT END:</v-card-title
              >

              <div class="text-h7 px-4 pb-4">
                <ul>
                  <li>
                    The RE-SOURCING Platform is a well-known and widely used hub
                    for information provision, networking and knowledge exchange
                    among key stakeholders
                  </li>
                  <li>
                    Substantially expanded the knowledge base on effective RS
                    practices (RE-SOURCING FS Cases), which will accelerate
                    uptake and support the mainstreaming of RS in business
                    practices
                  </li>
                  <li>
                    Contributed to an improved perception and shift of attitudes
                    among key business players, consultants and industry
                    initiatives, as well as public policy that RS provides a
                    competitive advantage and has acquired a deeper
                    understanding of its practical implementation
                  </li>
                </ul>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PurposeAndObjectives"
};
</script>

<style scoped></style>
