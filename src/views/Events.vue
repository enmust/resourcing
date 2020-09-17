<template>
  <v-card
    height="100%"
    flat
    tile
    color="transparent"
    class="events text-justify"
  >
    <v-card flat class="mb-4" color="transparent">
      <v-card-title class="primary--text text-h4 pb-1 font-weight-bold"
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
          lg="4"
          v-for="(event, index) in physicalEvents"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :id="event.title.replaceAll(' ', '_')"
              class="pa-2 mx-3 my-3"
              hover
              :elevation="hover ? 12 : 4"
              @click="event.showInfo = !event.showInfo"
            >
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

                <v-spacer />

                <v-btn icon :aria-label="`toggle ${event.title} info`">
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                <div v-html="event.text" />
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat color="transparent" class="mb-4">
      <v-card-title class="primary--text text-h4 pb-1 font-weight-bold"
        >Virtual events</v-card-title
      >

      <v-row no-gutters>
        <v-col
          cols="12"
          lg="4"
          offset-lg="4"
          v-for="(event, index) in virtualEvents"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="pa-2 mx-3 my-3"
              :id="event.title.replaceAll(' ', '_')"
              hover
              :elevation="hover ? 12 : 4"
              @click="event.showInfo = !event.showInfo"
            >
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

                <v-spacer />

                <v-btn icon :aria-label="`toggle ${event.title} info`">
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                <div v-html="event.text" />
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card
      color="primary3"
      elevation="4"
      class="mb-2 mt-4"
      height="600"
      v-if="false"
    >
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
        text: `
          <div class="text-center font-weight-bold mb-2">SAVE THE DATE</div>
          <div class="text-center font-weight-bold mb-2">RE-SOURCING Opening Conference</div>
          <div class="text-center font-weight-bold mb-6">on 18-19 January 2021, Vienna</div>
          <div class="mb-3">The Opening Conference of the <b>RE-SOURCING project</b> will take place on <b>18-19 January 2021</b>. It is currently planned as physical event for 150 participants in Vienna. However, due to the current COVID-19 situation, a decision about the conference being held physically in Vienna, as a fully virtual event, or a hybrid event (with participants attending the event physically in Vienna, while other will joint virtually) will be taken at a later stage.</div>
          <div class="mb-3">The Opening Conference will enable participants to engage in an open and comprehensive dialogue with representatives from all relevant stakeholder groups (industry, policy, CSOs and research) on the topic of responsible sourcing in global mineral value chains. We will investigate current challenges and opportunities in three industry sectors (<b class="accent--text">renewable energy</b>, <b class="accent2--text">mobility</b> & ICT) as well as address the global situation of responsible sourcing and how this affects European companies.</div>
          <div class="mb-3">Apart from keynote presentations from high-level international and European speakers, the conference will comprise of various interactive formats that allow a meaningful and yet informal exchange among all participants.</div>
          <div class="mb-4">More detailed information on the agenda and the registration process will be provided in a few weeks.</div>
          <div class="text-center font-weight-bold mb-3">So stay tuned and save-the date – we are very much looking forward to meeting and discussing with you at the RE-SOURCING Opening Conference!</div>`
      },
      {
        title: "Roadmap Workshops",
        showInfo: false,
        text: `
          <div class="text-center font-weight-bold mb-1">Virtual Roadmap Workshop</div>
          <div class="text-center font-weight-bold mb-3" style="font-size: 14px;">Responsible sourcing in the renewable energy supply chain – a reality or still a long way to go?</div>
          <div class="text-center font-weight-bold mb-3">on 29 October 2020, 13:00 - 17:00 CET</div>
          <div class="mb-4">The RE-SOURCING project is aiming to develop a roadmap for the renewable energy sector to achieve a sustainable and responsible value chain. To achieve this goal a virtual roadmap workshop will be held on <b>29 October 2020, 13:00 - 17:00 CET</b>.</div>
          <div class="font-weight-bold mb-4">At this workshop, our focus will be on:</div>
          <ul class="mb-4">
            <li>mining & processing of copper, rare earth elements, and silicon</li>
            <li>manufacturing and recycling of wind turbines and solar panels</li>
            <li>standards for sustainability and responsible sourcing</li>
          </ul>
          <div>We will shortly provide you with more details about the event.</div>`
      },
      {
        title: "Flagship Labs",
        showInfo: false,
        text:
          "RE-SOURCING will organise three sector-specific Flagship Lab Workshops for peer learning. Peer learning will serve to: 1) learn from good practice in FS cases; 2) develop an action catalogue for unresolved challenges in the FS cases; and 3) provide input to contextualise and generalise good practice factors in other organisational and EU MS settings (in preparation to Good Practice Guidance Reports)."
      }
    ],
    virtualEvents: [
      {
        title: "Virtual Conferences",
        showInfo: false,
        text: `
        <div class="text-center font-weight-bold mb-2">RE-SOURCING Virtual Event</div>
        <div class="text-center font-weight-bold mb-2">“Disruptions to Responsible Sourcing; The Good, The Bad and The Ugly”</div>
        <div class="text-center font-weight-bold mb-5">On 9 October 2020, 10:00-13:30 CET</div>
        <div class="mb-3"><b>The RE-SOURCING project</b> will be hosting its first virtual event on the <b>9th of October, 10:00 to 13:30 CET</b>. This event will outline the responsible sourcing challenges for businesses transitioning their practices, particularly in the face of emerging challenges from Covid-19 and the expected impetus for materials demand resulting from the Green Deal. The event explores the positives and negatives for responsible sourcing in the short, medium and long term.</div>
        <div class="mb-2"><b>Who should attend this event</b>: Given the disruptions in 2020, the social, environmental and economic impacts and consequences for responsible sourcing within mineral supply chains will be of interest to EU business and those who advocate responsible business practices in the mineral sector. As an industry stakeholder, mining company, EU business incorporating responsible sourcing practices and civil society member, you should attend this event to initiate your engagement with the RE-SOURCING project network.</div>
        <div class="text-center font-weight-bold"><a class="link" href="https://www.eventbrite.at/e/re-sourcing-virtual-event-tickets-119577261809" target="RegistrationWindow">Register to the 1st RE-SOURCING Virtual Event here</a></div>`
      }
      // {
      //   title: "Webinars",
      //   showInfo: false,
      //   text:
      //     "2 virtual events will incorporate top-level webcasts, live keynotes, a virtual exhibition, webinars and Q&A bulletin boards and attract over 500 participants from all over the globe."
      // },
      // {
      //   title: "Webcasts",
      //   showInfo: false,
      //   text:
      //     "2 virtual events will incorporate top-level webcasts, live keynotes, a virtual exhibition, webinars and Q&A bulletin boards and attract over 500 participants from all over the globe."
      // }
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
  }),

  mounted() {
    if (this.$route.query && this.$route.query.tab) {
      let tab = this.$route.query.tab;

      this.physicalEvents.forEach(item => {
        if (item.title === tab) {
          item.showInfo = true;
          this.$vuetify.goTo(`#${tab.replaceAll(" ", "_")}`, { offset: -40 });
        } else item.showInfo = false;
      });

      this.virtualEvents.forEach(item => {
        if (item.title === tab) {
          item.showInfo = true;
          this.$vuetify.goTo(`#${tab.replaceAll(" ", "_")}`, { offset: -40 });
        } else item.showInfo = false;
      });
    }
  }
};
</script>

<style scoped></style>
