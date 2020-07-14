<template>
  <v-card height="100%" flat tile color="transparent" class="events">
    <v-card flat class="mb-4" color="transparent">
      <v-card-title class="primary--text text-h4 pb-1"
        >Physical events</v-card-title
      >

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
              <v-card-title
                class="primary--text font-weight-bold text-uppercase justify-end"
                >{{ event }}</v-card-title
              >
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
              <v-card-title
                class="primary--text font-weight-bold text-uppercase justify-end"
                >{{ event }}</v-card-title
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card color="primary3" elevation="4" class="mb-2 mt-4" height="600">
      <v-card-title class="white--text text-h4 pb-1"
        >Events at a glance</v-card-title
      >

      <v-row no-gutters class="px-2 pb-2" v-if="false" >
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
    physicalEvents: ["Conferences", "Roadmap Workshops", "Flagship Labs"],
    projectEvents: ["Virtual Conferences", "Webinars", "Webcasts"],
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
