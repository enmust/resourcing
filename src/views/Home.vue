<template>
  <div class="home">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="9"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="primary--text text-h5 font-weight-bold mt-2 mb-5">
          RE-SOURCING - Make your case for Responsible Sourcing!
        </div>

        <div class="text-body-1 mb-3">
          Responsible Sourcing is becoming a reality for more and more
          businesses, NGOs, and policymakers. Everyone is striving to keep ahead
          of rapidly evolving ecological and social needs, company practices,
          business models, government regulations, and initiatives spearheaded
          by civil society, etc.
        </div>

        <div class="text-body-1 mb-3">
          In response to the growing challenge of responsible sourcing, the
          Vienna University of Economics and Business, together with 11
          international partners, started the RE-SOURCING Global Stakeholder
          Platform in 2020.
        </div>

        <div class="text-body-1">
          Over the period of four years, the RE-SOURCING Platform will help
          decision-makers in industry, public policy and civil society to:
        </div>

        <v-row>
          <v-col cols="12" sm="6">
            <v-card
              class="d-flex primary3 white--text"
              min-height="200"
              elevation="4"
            >
              <v-card-title
                class="font-weight-bold text-h6"
                style="word-break: break-word;"
              >
                Learn together from innovative business cases for Responsible
                Sourcing</v-card-title
              >
              <v-card class="py-4 px-6 align-self-center mr-4" elevation="6">
                <v-icon color="primary" x-large>far fa-lightbulb</v-icon>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card
              class="d-flex primary3 white--text"
              min-height="200"
              elevation="4"
            >
              <v-card-title
                class="font-weight-bold text-h6"
                style="word-break: break-word;"
              >
                Create Responsible Sourcing Industry Roadmaps for renewable
                energy, mobility and electronics in the EU</v-card-title
              >
              <v-card class="py-4 px-5 align-self-center mr-4" elevation="6">
                <v-icon color="primary" x-large>fas fa-recycle</v-icon>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card
              class="d-flex primary3 white--text"
              min-height="200"
              elevation="4"
            >
              <v-card-title
                class="font-weight-bold text-h6"
                style="word-break: break-word;"
              >
                Advance the harmonization of concepts and establish a Global
                Definition of Responsible Sourcing</v-card-title
              >
              <v-card class="pa-4 align-self-center mr-4" elevation="6">
                <v-icon color="primary" x-large>far fa-edit</v-icon>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card
              class="d-flex primary3 white--text"
              min-height="200"
              elevation="4"
            >
              <v-card-title
                class="font-weight-bold text-h6"
                style="word-break: break-word;"
              >
                Build a global Responsible Sourcing Community by connecting
                existing networks & stakeholders and expanding their
                base</v-card-title
              >
              <v-card class="py-4 px-5 align-self-center mr-4" elevation="6">
                <v-icon color="primary" x-large
                  >fas fa-expand-arrows-alt</v-icon
                >
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="3" class="d-flex primary2 text-center">
        <v-row no-gutters class="my-3">
          <v-col cols="12">
            Latest news
          </v-col>

          <v-col cols="12">
            Upcoming news
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-sheet
      color="accent3"
      height="38"
      width="100%"
      class="drop-shadow"
    ></v-sheet>

    <v-row no-gutters class="primary2" justify="center">
      <v-col
        cols="12"
        md="9"
        class="my-3 primary2 white--text"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 font-weight-bold mt-2 mb-5">
          A team with diverse backgrounds to match the challenge
        </div>

        <div class="text-body-1 mb-3">
          Our team composition facilitates the setup of the RE-SOURCING Global
          Stakeholder Platform as a neutral and mediating space that is open to
          the many perspectives of involved stakeholders. Our skills,
          comprehensive background and expertise in the area of industry,
          academia and civil society will create the way forward that works for
          all: the planet, the people and businesses alike.
        </div>
      </v-col>

      <v-col cols="12" class="pa-2 primary5">
        TEAM
      </v-col>

      <v-col
        cols="12"
        md="9"
        class="py-3 text-center white--text"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h6 font-weight-bold mt-2">
          Be the first to read what's new! Subscribe to mailing list:
        </div>

        <div class="d-flex flex-row mx-auto mb-2" style="max-width: 400px;">
          <v-text-field
            v-model="usersEmailAddress"
            dense
            height="44"
            solo
            hide-details
            class="mr-2"
            placeholder="Enter your email address"
            type="email"
          ></v-text-field>

          <v-btn
            :fab="$vuetify.breakpoint.xsOnly"
            @click="subscribeToMailingList()"
            :large="$vuetify.breakpoint.smAndUp"
            :height="$vuetify.breakpoint.xsOnly ? 44 : ''"
            :width="$vuetify.breakpoint.xsOnly ? 44 : ''"
            color="accent3"
          >
            <span class="hidden-xs-only text-body-1 align-self-center"
              >Subscribe</span
            >
            <v-icon :right="$vuetify.breakpoint.smAndUp"
              >far fa-envelope</v-icon
            >
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-sheet
      color="accent3"
      height="38"
      width="100%"
      class="drop-shadow"
    ></v-sheet>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <iframe
          class="fill-height"
          style="min-height: 360px"
          width="100%"
          src="https://www.youtube.com/embed/48Q2OxH_64w?start=5"
        ></iframe>
      </v-col>

      <v-col cols="12" md="6" class="px-3 pt-3 pb-5">
        <div class="text-h6 font-weight-bold primary--text mb-5">
          The latest news...
        </div>

        <div
          class="d-flex flex-row flex-wrap flex-md-nowrap justify-space-around align-self-center"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card class="py-2 px-3" :elevation="hover ? 12 : 4" hover>
              <v-icon style="color: #2867B2" x-large>fab fa-linkedin-in</v-icon>
            </v-card>
          </v-hover>

          <v-hover v-slot:default="{ hover }">
            <v-card class="py-2 px-3" :elevation="hover ? 12 : 4" hover>
              <v-icon style="color: #4267B2" x-large
                >fab fa-facebook-square</v-icon
              >
            </v-card>
          </v-hover>

          <v-hover v-slot:default="{ hover }">
            <v-card class="py-2 px-3" :elevation="hover ? 12 : 4" hover>
              <v-icon style="color: #1DA1F2" x-large
                >fab fa-twitter-square</v-icon
              >
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    usersEmailAddress: ""
  }),

  methods: {
    subscribeToMailingList() {
      if (this.validateEmail(this.usersEmailAddress)) {
        // Todo: Valid email -> Subscribe to list!
        console.log("Todo: Subscribe to mailing list");
      } else {
        // Todo: Not valid -> Let user know that wrong address was entered!
        console.log("Todo: This is not a valid email address!");
      }
    },

    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style scope>
.middle-elevation {
  -webkit-box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.2),
    0px 0px 10px 0px rgba(0, 0, 0, 0.14), 0px 0px 20px 0px rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.2),
    0px 0px 10px 0px rgba(0, 0, 0, 0.14), 0px 0px 20px 0px rgba(0, 0, 0, 0.12) !important;
}

.test {
  height: calc(100% / 56.25);
}
</style>
