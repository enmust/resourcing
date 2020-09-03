<template>
  <div class="platform-steering-committee">
    <v-row no-gutters class="my-2">
      <v-col class="mx-auto pa-3" cols="12" sm="11" md="10" lg="8" xl="6">
        <v-card color="primary4" elevation="4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text d-flex justify-center"
            >Steering Committee</v-card-title
          >
          <v-card-text class="text-h7 text-justify"
            >The RE-SOURCING Platform Steering Committee (PSC) is a board of
            high-level valued experts from organisations with a strong role in
            agenda setting & advocacy for Responsible Sourcing across Europe and
            globally.</v-card-text
          >

          <v-row no-gutters class="px-2 pb-2">
            <v-col
              class="pa-2"
              cols="12"
              md="6"
              v-for="(entity, index) in steeringCommittee"
              :key="index"
            >
              <v-card
                class="d-flex flex-row"
                elevation="4"
                color="white"
                min-height="125"
              >
                <div
                  class="align-self-center"
                  v-if="entity.img"
                  :class="{
                    'py-2 pl-2': $vuetify.breakpoint.xsOnly,
                    'pl-1':
                      entity.name === 'Raffaele Rossi' ||
                      entity.name === 'Julia Poliscanova'
                  }"
                >
                  <v-img
                    v-if="entity.img"
                    :src="entity.img"
                    max-width="125"
                  ></v-img>
                </div>

                <v-avatar
                  v-else
                  color="primary3"
                  size="62"
                  class="rounded-circle align-self-center ma-3 elevation-4"
                >
                  <v-icon class="white--text" large>far fa-user</v-icon>
                </v-avatar>

                <div
                  class="pl-3 py-2 pr-2 d-flex flex-column fill-height align-self-center"
                >
                  <div class="text-body-1 font-weight-bold mb-4">
                    {{ entity.organisation }}
                  </div>
                  <div class="text-body-1 font-weight-bold">
                    {{ entity.name }}
                  </div>
                  <div class="font-italic">{{ entity.title }}</div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PlatformSteeringCommittee",
  data: () => ({
    steeringCommittee: [
      {
        name: "Guy Ethier",
        title: "Chair, Global Battery Alliance Executive Board",
        organisation: "Global Battery Alliance",
        img: require("../assets/logos/GBA-logo-GreyCircle-RGB-AW.jpg")
      },
      {
        name: "Mathy V. Stanislaus, Esq.",
        title: "Interim Director",
        organisation: "Global Battery Alliance",
        img: require("../assets/logos/GBA-logo-GreyCircle-RGB-AW.jpg")
      },
      {
        name: "Jonathan Eckert",
        title: "Project Lead",
        organisation: "Global Battery Alliance",
        img: require("../assets/logos/GBA-logo-GreyCircle-RGB-AW.jpg")
      },
      {
        name: "Stefan Crets",
        title: "Executive Director",
        organisation: "CSR Europe",
        img: require("../assets/logos/CSR_Europe.jpg")
      },
      {
        name: "Heike Schulze",
        title: "Coordinator of Drive Sustainability",
        organisation: "CSR Europe",
        img: require("../assets/logos/CSR_Europe.jpg")
      },
      {
        name: "Tobias Persson",
        title: "Analyst",
        organisation: "The Swedish Agency for Growth Policy Analysis",
        img: require("../assets/logos/The_Swedish_Agency_for_Growth_Analysis.jpg")
      },
      {
        name: "Raffaele Rossi",
        title: "Policy Analyst",
        organisation: "Solarpower Europe",
        img: require("../assets/logos/SolarPowerEurope.jpg")
      },
      {
        name: "Julia Poliscanova",
        title: "Senior Director, Vehicles & Emobility",
        organisation: "Transport & Environment",
        img: require("../assets/logos/Transport_Environment.jpg")
      },
      {
        name: "Marti Flacks",
        title: "Deputy Director for North America and Natural Resources",
        organisation: "Business & Human Rights Resource Centre",
        img: require("../assets/logos/Business_Human_Rights_resource_cenrte.jpg")
      }
    ]
  })
};
</script>

<style scoped></style>
