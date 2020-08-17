<template>
  <v-card
    height="100%"
    flat
    tile
    color="transparent"
    class="events text-justify"
  >
    <v-card flat class="mb-4" color="transparent">
      <v-card-title class="primary--text text-h4 pb-1"
        >Physical events</v-card-title
      >

      <v-row>
        <v-col cols="12">
          <v-card-text class="text-h7 py-0">
            The RE:SOURCING project will host eleven physical events: three
            Flagship Labs (Amsterdam, Leoben, Darmstadt), two Conferences (in
            Brussels and Vienna), three Roadmap Workshops (Brussels), three
            Global Advocacy Fora (Chile, South Africa, China), several online
            webinars and consultations for the RE:SOURCING platform.
          </v-card-text>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          v-for="(event, index) in physicalEvents"
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

              <v-card-actions class="pa-0">
                <v-card-title
                  class="primary--text font-weight-bold text-uppercase justify-end pb-1"
                  >{{ event.title }}</v-card-title
                >
                <v-spacer />

                <v-btn
                  icon
                  @click="event.showInfo = !event.showInfo"
                  :aria-label="`toggle ${event.title} info`"
                >
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                {{ event.text }}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat color="transparent" class="mb-4">
      <v-card-title class="primary--text text-h4 pb-1"
        >Project events</v-card-title
      >

      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
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

              <v-card-actions class="pa-0">
                <v-card-title
                  class="primary--text font-weight-bold text-uppercase justify-end pb-1"
                  >{{ event.title }}</v-card-title
                >
                <v-spacer />

                <v-btn
                  icon
                  @click="event.showInfo = !event.showInfo"
                  :aria-label="`toggle ${event.title} info`"
                >
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                {{ event.text }}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card color="primary3" elevation="4" class="mb-2 mt-4" height="600">
      <v-card-title class="white--text text-h4 pb-1"
        >Events at a glance</v-card-title
      >

      <v-row no-gutters class="px-2 pb-2" v-if="false">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="(event, index) in testImages"
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
                class="primary--text font-weight-bold text-uppercase justify-end"
                >{{ event }}</v-card-title
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Events",
  data: () => ({
    physicalEvents: [
      {
        title: "Conferences",
        showInfo: false,
        text:
          "Two physical Conferences will aim to ensure continued and more personal, face to face networking opportunities for stakeholders. The conference will incorporate top-level keynotes, lively panel discussions, interactive working groups and attract over 300 participants from all over the globe."
      },
      {
        title: "Roadmap Workshops",
        showInfo: false,
        text:
          "The 3 Sector Roadmap Workshops will bring together about 100 key decision-makers in industry, policy, business and civil society. The roadmap workshops will generate content in the key areas of the roadmap. One of the main goals is to create ownership of the process for targeted sector stakeholders and initiatives and ensure applicability of Sectoral Roadmaps for future implementation."
      },
      {
        title: "Flagship Labs",
        showInfo: false,
        text:
          "RE-SOURCING will organise three sector-specific Flagship Lab Workshops for peer learning. Peer learning will serve to: 1) learn from good practice in FS cases; 2) develop an action catalogue for unresolved challenges in the FS cases; and 3) provide input to contextualise and generalise good practice factors in other organisational and EU MS settings (in preparation to Good Practice Guidance Reports)."
      }
    ],
    projectEvents: [
      {
        title: "Virtual Conferences",
        showInfo: false,
        text:
          "2 virtual events will incorporate top-level webcasts, live keynotes, a virtual exhibition, webinars and Q&A bulletin boards and attract over 500 participants from all over the globe."
      },
      {
        title: "Webinars",
        showInfo: false,
        text:
          "2 virtual events will incorporate top-level webcasts, live keynotes, a virtual exhibition, webinars and Q&A bulletin boards and attract over 500 participants from all over the globe."
      },
      {
        title: "Webcasts",
        showInfo: false,
        text:
          "2 virtual events will incorporate top-level webcasts, live keynotes, a virtual exhibition, webinars and Q&A bulletin boards and attract over 500 participants from all over the globe."
      }
    ],
    testImages: [
      "pilt1",
      "pilt2",
      "pilt3",
      "pilt4",
      "pilt5",
      "pilt6",
      "pilt7",
      "pilt8",
      "pilt9",
      "pilt10",
      "pilt11",
      "pilt12"
    ]
  })
};
</script>

<style scoped></style>
