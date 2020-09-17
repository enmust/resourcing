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
        <div
          class="primary--text text-h5 font-weight-bold mt-2 mb-5 text-justify"
        >
          RE-SOURCING - Make your case for Responsible Sourcing!
        </div>

        <div class="text-h7 mb-3 text-justify">
          Responsible Sourcing is becoming a reality for more and more
          businesses, NGOs, and policymakers. Everyone is striving to keep ahead
          of rapidly evolving ecological and social needs, company practices,
          business models, government regulations, and initiatives spearheaded
          by civil society, etc.
        </div>

        <div class="text-h7 mb-3 text-justify">
          In response to the growing challenge of responsible sourcing, the
          Vienna University of Economics and Business, together with 11
          international partners, started the RE-SOURCING Global Stakeholder
          Platform in 2020.
        </div>

        <div class="text-h7 text-justify">
          Over the period of four years, the RE-SOURCING Platform will help
          decision-makers in industry, public policy and civil society to:
        </div>

        <div
          class="mt-2"
          :class="{
            'video-container': $vuetify.breakpoint.mdAndDown,
            'text-center': $vuetify.breakpoint.lgAndUp
          }"
        >
          <iframe
            title="RE-SOURCING video introduction"
            :class="{
              video: $vuetify.breakpoint.mdAndDown,
              'video-large-screen': $vuetify.breakpoint.lgAndUp
            }"
            src="https://www.youtube.com/embed/_Vyx1wkvTgE"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>

        <v-row>
          <v-col cols="12" sm="6">
            <v-card
              class="d-flex primary3 white--text"
              min-height="200"
              elevation="4"
            >
              <v-card-title
                class="font-weight-bold text-h6 text-center"
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
                class="font-weight-bold text-h6 text-center"
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
                class="font-weight-bold text-h6 text-center"
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
                class="font-weight-bold text-h6 text-center"
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

      <v-col cols="12" md="3" class="primary2">
        <v-row no-gutters class="my-3">
          <v-col cols="12" class="px-5 py-3">
            <v-card>
              <v-card-title
                @click="$router.push('news')"
                class="text-h5 primary--text link"
                style="word-break: break-word;"
                >Latest news</v-card-title
              >

              <ul class="ml-4 pr-4 pb-2">
                <li>
                  <router-link class="link" to="/news"
                    >Newsletter: September 2020</router-link
                  >
                </li>
              </ul>

              <!-- Todo: Disabled Twitter feed for now -->
              <v-card-text class="px-0 py-2" v-if="false">
                <a
                  class="twitter-timeline"
                  data-height="400"
                  href="https://twitter.com/re_sourcing?ref_src=twsrc%5Etfw"
                  >Tweets by re_sourcing</a
                >
              </v-card-text>

              <v-card-actions class="d-flex flex-wrap">
                <v-btn
                  small
                  href="https://re-sourcing.us9.list-manage.com/subscribe?u=4131de53447fbeab61124f6d0&id=2a1f831795"
                  target="SubscribeWindow"
                  rel="noopener noreferrer"
                  color="accent3"
                  aria-label="Go to subscribe form"
                >
                  Subscribe
                </v-btn>
                <v-spacer />

                <v-btn
                  icon
                  aria-label="linked-in"
                  href="https://www.linkedin.com/company/re-sourcing-stakeholder-platform/"
                  target="LinkedInWindow"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <v-icon style="color: #2867B2">fab fa-linkedin</v-icon>
                </v-btn>

                <v-btn
                  icon
                  aria-label="twitter"
                  href="https://twitter.com/re_sourcing"
                  target="TwitterWindow"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <v-icon style="color: #1DA1F2">fab fa-twitter</v-icon>
                </v-btn>

                <v-btn
                  icon
                  aria-label="youtube"
                  href="https://www.youtube.com/channel/UCFrqVkfz4yHeDvP3hrgLWbA"
                  target="YoutubeWindow"
                  rel="noopener noreferrer"
                  title="RE-SOURCING channel"
                >
                  <v-icon style="color: #FF0000">fab fa-youtube</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" class="px-5 py-3">
            <v-card>
              <v-card-title
                @click="$router.push('events')"
                class="text-h5 primary--text link"
                style="word-break: break-word;"
                >Upcoming events</v-card-title
              >

              <ul class="ml-4 pr-4 pb-2">
                <li>
                  <router-link class="link" to="/events?tab=Virtual Conferences"
                    >RE-SOURCING Virtual Event</router-link
                  >
                  <a
                    class="text-decoration-none font-weight-bold red--text link ml-1"
                    href="https://www.eventbrite.at/e/re-sourcing-virtual-event-tickets-119577261809"
                    target="RegistrationWindow"
                    >Registration now open!</a
                  >
                </li>

                <li>
                  <router-link class="link" to="/events?tab=Roadmap Workshops"
                    >Virtual Roadmap Workshop</router-link
                  >
                </li>

                <li>
                  <router-link class="link" to="/events?tab=Conferences"
                    >Opening Conference</router-link
                  >
                </li>
              </ul>

              <v-card-actions>
                <v-img
                  :src="
                    require('../assets/logos/project_logo/re-sourcing_transparent.png')
                  "
                  max-width="125"
                >
                </v-img>
              </v-card-actions>
            </v-card>
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

        <div class="text-h7 mb-3 text-justify">
          Our team composition facilitates the setup of the RE-SOURCING Global
          Stakeholder Platform as a neutral and mediating space that is open to
          the many perspectives of involved stakeholders. Our skills,
          comprehensive background and expertise in the area of industry,
          academia and civil society will create the way forward that works for
          all: the planet, the people and businesses alike.
        </div>
      </v-col>

      <v-col cols="12" class="pa-2 primary5">
        <carousel-3d
          id="members"
          :controls-visible="true"
          :space="400"
          :height="300"
        >
          <slide
            v-for="(member, index) in members"
            :index="index"
            :key="member.name"
          >
            <v-card class="d-flex flex-column transparent fill-height">
              <v-avatar
                class="align-self-center rounded-circle"
                v-if="member.img"
                size="150"
              >
                <v-img
                  style="background-position: top"
                  :class="member.name.replace(/ /g, '_').toLowerCase()"
                  aspect-ratio="1"
                  :src="member.img"
                ></v-img>
              </v-avatar>

              <v-card-text class="text-center py-2">
                <div class="font-weight-bold text-h5 mb-2">
                  {{ member.name }}
                </div>
                <div class="text-body-1 mb-1">{{ member.institute }}</div>
                <div
                  v-if="member.institute_extra"
                  class="text-body-1 mb-1"
                  style="font-size: 15px;"
                >
                  {{ member.institute_extra }}
                </div>
                <div class="text-body-2">{{ member.job }}</div>
              </v-card-text>
            </v-card>
          </slide>
        </carousel-3d>
      </v-col>

      <v-col
        cols="12"
        md="9"
        class="py-3 text-center white--text subscribe"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h6 font-weight-bold mt-2">
          Be the first to read what's new! Subscribe to mailing list:
        </div>

        <div
          class="d-flex flex-row mx-auto mb-2 justify-center"
          style="max-width: 400px;"
        >
          <v-btn
            :fab="$vuetify.breakpoint.xsOnly"
            href="https://re-sourcing.us9.list-manage.com/subscribe?u=4131de53447fbeab61124f6d0&id=2a1f831795"
            :large="$vuetify.breakpoint.smAndUp"
            :height="$vuetify.breakpoint.xsOnly ? 44 : ''"
            :width="$vuetify.breakpoint.xsOnly ? 44 : ''"
            color="accent3"
            target="SubscribeWindow"
            title="Go to subscribe form"
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

    <!-- TODO: Hidden for now (missing information) -->
    <v-row no-gutters v-if="false">
      <v-col cols="12" offset-lg="3" lg="6" class="px-3 pt-3 pb-5">
        <div class="text-h6 font-weight-bold primary--text mt-3">
          The latest news...
        </div>

        <v-row>
          <v-col cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="py-2 px-3 d-flex justify-center"
                :elevation="hover ? 12 : 4"
                hover
                min-height="250"
              >
                <v-icon style="color: #2867B2" x-large
                  >fab fa-linkedin-in</v-icon
                >
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="py-2 px-3 d-flex justify-center"
                :elevation="hover ? 12 : 4"
                hover
                min-height="250"
              >
                <a
                  class="twitter-timeline"
                  data-height="400"
                  href="https://twitter.com/re_sourcing?ref_src=twsrc%5Etfw"
                  >Tweets by re_sourcing</a
                >
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Home",

  components: {
    Carousel3d,
    Slide
  },

  data: () => ({
    usersEmailAddress: "",
    members: [
      {
        name: "Andreas Endl",
        institute: "Vienna University of Economics and Business",
        institute_extra: "Institute for Managing Sustainability",
        job: "Project coordination & research",
        img: require("../assets/img/members/andreas_endl.jpg")
      },
      {
        name: "Gerald Berger",
        institute: "Vienna University of Economics and Business",
        institute_extra: "Institute for Managing Sustainability",
        job: "Project coordination & event and peer learning design",
        img: require("../assets/img/members/gerald_berger.jpg")
      },
      {
        name: "Bas de Leeuw",
        institute: "World Resources Forum",
        job: "Managing Director, Communication and Stakeholder Engagement",
        img: require("../assets/img/members/bas_deleeuw.jpg")
      },
      {
        name: "Mathias Schluep",
        institute: "World Resources Forum",
        job: "Program Director, Communication and Stakeholder Engagement",
        img: require("../assets/img/members/mathias_schluep.jpg")
      },
      {
        name: "Shahrzad Manoochehri",
        institute: "World Resources Forum",
        job: "Project Manager, Communication and Stakeholder Engagement",
        img: require("../assets/img/members/shahrzad_manoocheri.jpg")
      },
      {
        name: "Tobias Kind",
        institute: "World Wide Fund For Nature (WWF) Germany",
        job: "Global Lead Mining & Metals",
        img: require("../assets/img/members/tobias_kind.jpg")
      },
      {
        name: "Esther Laabs",
        institute: "EIT RawMaterials GmbH",
        job: "Project Manager Innovation",
        img: require("../assets/img/members/esther_laabs.jpg")
      },
      {
        name: "Patrick Nadoll",
        institute: "EIT RawMaterials GmbH",
        job: "Senior Adviser/Exploration and Resource Assessment",
        img: require("../assets/img/members/patrick_nadoll.jpeg")
      },
      {
        name: "Annika Glatz",
        institute:
          "AHK Chile (German-Chilean Chamber of Commerce and Industry)",
        job: "Leader Mining & Sustainability",
        img: require("../assets/img/members/annika_glatz.jpg")
      },
      {
        name: "Iris Wunderlich",
        institute:
          "AHK Chile (German-Chilean Chamber of Commerce and Industry)",
        job: "Senior Project Manager Energy, Mining & Sustainability",
        img: require("../assets/img/members/iris_wunderlich.jpg")
      },
      {
        name: "Peter Dolega",
        institute: "Öko-Institut e.V.",
        job: "Researcher with focus on resources and mobility",
        img: require("../assets/img/members/peter_dolega.jpg")
      },
      {
        name: "Stefanie Degreif",
        institute: "Öko-Institut e.V.",
        job: "Researcher, Division Resources & Transport",
        img: require("../assets/img/members/stefanie_degreif.jpg")
      },
      {
        name: "Michael Tost",
        institute: "Montan Universität Leoben",
        job:
          "Chair of Mining Engineering and Mineral Economics, Senior Researcher, Project Manager",
        img: require("../assets/img/members/michael_tost.jpg")
      },
      {
        name: "Marie-Theres Kügerl",
        institute: "Montan Universität Leoben",
        job:
          "Chair of Mining Engineering and Mineral Economics, Junior Researcher",
        img: require("../assets/img/members/marie-theres_kugerl.jpg")
      },
      {
        name: "Masuma Farooki",
        institute: "MineHutte",
        job: "Consulting Director",
        img: require("../assets/img/members/masuma_farooki.jpg")
      },
      {
        name: "Veiko Karu",
        institute: "Tallinn University of Technology, Department of Geology",
        job: "Division of Mining, Senior Project Manager",
        img: require("../assets/img/members/veiko_karu.jpg")
      },
      {
        name: "Karin Robam",
        institute: "Tallinn University of Technology, Department of Geology",
        job: "Division of Mining, Specialist",
        img: require("../assets/img/members/karin_robam.jpg")
      },
      {
        name: "Alejandro González",
        institute: "Centre for Research on Multinational Corporations",
        job: "Researcher SOMO / Coordinator GoodElectronics Network",
        img: require("../assets/img/members/alejandro_gonzalez.jpg")
      },
      {
        name: "Jan Rosenkranz",
        institute: "Luleå University of Technology",
        job: "Professor in Mineral Processing",
        img: require("../assets/img/members/jan_rosenkranz.jpg")
      },
      {
        name: "Noé Barriere",
        institute: "Vienna University of Economics of Business",
        institute_extra: "Institute for Managing Sustainability",
        job: "Peer learning on innovative business cases",
        img: require("../assets/img/members/noe_barriere.jpg")
      },
      {
        name: "Alexander Graf",
        institute: "Vienna University of Economics and Business",
        institute_extra: "Institute for Managing Sustainability",
        job: "Project Coordination & Research",
        img: require("../assets/img/members/alexander_graf.jpg")
      }
    ]
  }),

  mounted() {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
  },

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

#members .carousel-3d-slide {
  background-color: transparent !important;
  border: unset !important;
}

.peter_dolega .v-image__image,
.stefanie_degreif .v-image__image,
.karin_robam .v-image__image {
  background-position: top !important;
}

.video-container {
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-large-screen {
  width: 640px;
  height: 480px;
}

.link:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
