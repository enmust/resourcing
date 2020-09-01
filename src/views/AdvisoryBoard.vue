<template>
  <div class="advisory-board">
    <v-row no-gutters class="my-2">
      <v-col class="mx-auto pa-3" cols="12" sm="11" md="10" lg="8" xl="6">
        <v-card color="primary4" elevation="4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text d-flex justify-center"
            >Advisory Board</v-card-title
          >
          <v-card-text class="text-h7 text-justify">
            The RE-SOURCING Advisory Board consists of high-level valued experts
            who will meet regularly with the RE-SOURCING project. The Advisory
            Board provides high-level advice to the project, ensuring that all
            relevant aspects and perspectives are considered in the RE-SOURCING
            project.
          </v-card-text>

          <v-row no-gutters class="px-2 pb-2">
            <v-col
              class="pa-2"
              cols="12"
              md="6"
              v-for="(entity, index) in advisoryBoardFiltered"
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
                      entity.name === 'Antonio Pedro' ||
                      entity.name === 'Debby De Roover' ||
                      entity.name === 'Lucia Mancini'
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
  name: "AdvisoryBoard",
  data: () => ({
    advisoryBoard: [
      {
        name: "Antonio Pedro",
        title: "Director",
        organisation: "United Nations Economic Commission for Africa",
        img: require("../assets/logos/united_nations.jpg"),
        isHidden: true
      },
      {
        name: "Leon Riedel",
        title: "Project Adviser",
        organisation: "European Partnership for Responsible Minerals (EPRM)",
        img: require("../assets/logos/EPRM-Logo-Text-Small.jpg")
      },
      {
        name: "Lucia Mancini",
        title:
          "Scientific officer Joint Research Centre Directorate D – Sustainable Resources",
        organisation: "European Commission",
        img: require("../assets/logos/DG_Grow.jpg")
      },
      {
        name: "Aimee Boulanger",
        title: "Initiative for Responsible Mining Assurance",
        organisation: "IRMA",
        img: require("../assets/logos/IRMA_Lock up_Portrait_Blk_RGB.png")
      },

      {
        name: "",
        title: "",
        organisation:
          "The Organisation for Economic Co-operation and Development",
        img: require("../assets/logos/OECD-logo.jpg")
      },
      {
        name: "Debby De Roover",
        title:
          "Policy Officer Energy intensive industries and raw materials (Green Deal)",
        organisation:
          "European Commission Internal Market, Industry, Entrepreneurship and SMEs",
        img: require("../assets/logos/DG_Grow.jpg")
      }
    ]
  }),
  computed: {
    advisoryBoardFiltered() {
      return this.advisoryBoard.filter(item => !item.isHidden);
    }
  }
};
</script>

<style scoped></style>
