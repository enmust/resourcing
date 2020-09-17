<template>
  <div class="news white--text text-justify">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h4 text-center font-weight-bold mt-2">
          Read the latest news about RE-SOURCING!
        </div>

        <v-row class="mt-5">
          <v-col cols="12">
            <p class="text-h5 news-link font-weight-bold">
              <a
                class="white--text"
                href="https://mailchi.mp/6330fb173aa0/re-sourcing-newsletter-september-4448302?e=[UNIQID]"
                target="NewsWindow"
              >
                Newsletter: September 2020
              </a>
            </p>

            <p class="text-h7">
              1st edition of our Newsletter, which brings to you the most recent
              developments as well as actions and events of the RE-SOURCING
              project. We bring together businesses, policy makers and civil
              society in their endeavor to establish Responsible Sourcing. In
              this Newsletter you will find important and first-hand information
              about the following topics which we hope are useful for your work.
            </p>

            <div class="text-h7">
              <ul>
                <li>RE-SOURCING Project at a Glance</li>
                <li>Latest News</li>
                <li>Upcoming Events</li>
                <li>Recent Publications</li>
              </ul>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col cols="12" sm="12" md="5">
            <v-img
              class="rounded"
              style="border: 3px solid white"
              :src="require('../assets/img/news/news.jpg')"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="5">
            <p class="text-h5 news-link font-weight-bold">
              <a
                class="white--text"
                href="https://www.wu.ac.at/en/sustainability/news-details/detail/eu-project-re-sourcing-successful-project-kick-off-meeting-at-the-wu-vienna"
                target="NewsWindow"
              >
                EU project RE-SOURCING: Successful project Kick-off meeting at
                the WU Vienna
              </a>
            </p>

            <p class="text-h7">
              ON 16-18 December 2019, the RE-SOURCING consortium met for the
              first time in person at the Vienna University of Economics and
              Business. 27 people from 12 partners and from 9 countries
              (including international collaboration with partners from Rwanda,
              China and Chile) got together and set the basis for the Global
              Stakeholder Platform on Responsible Sourcing. Interactive working
              groups, video interviews with experts, presentations of project
              tasks and an entertaining evening program made for a solid basis
              to foster successful collaboration between the 27 participants
              over the next 4 years
            </p>

            <p class="text-body-1"></p>
          </v-col>
        </v-row>

        <!-- TODO: Hidden for now (missing information) -->
        <v-row class="mt-4" v-if="false">
          <v-col cols="12" class="text-h5 font-weight-bold">
            RE-SOURCING will work together with media professionals for one
            large new campaign hitting media outlets toward the end of the
            project.
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="4">
                <v-card dark color="primary3" elevation="4" min-height="250">
                  <v-card-title
                    class="d-flex justify-center font-weight-bold text-h5"
                    >From project:</v-card-title
                  >
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card dark color="primary3" elevation="4" min-height="250">
                  <v-card-title
                    class="d-flex justify-center font-weight-bold text-h5"
                    >Press release:</v-card-title
                  >
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card dark color="primary3" elevation="4" min-height="250">
                  <v-card-title
                    class="d-flex justify-center font-weight-bold text-h5"
                    >From the field:</v-card-title
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <div class="text-h5">
                  <b class="font-weight-bold">RE-SOURCING in social media</b>:
                  <!--                  (E-newsletters, Twitter, LinkedIN, Facebook. RE-SOURCING will-->
                  <!--                  use social media outlets to ensure wider outreach and-->
                  <!--                  dissemination of project activities and results under these-->
                  <!--                  selected hashtags (#RESOURCING; #Horizon2020project; etc.).-->
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="d-flex justify-center"
                    color="primary5"
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

              <v-col cols="12" sm="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="d-flex justify-center"
                    color="primary5"
                    :elevation="hover ? 12 : 4"
                    hover
                    min-height="250"
                  >
                    <v-icon style="color: #4267B2" x-large
                      >fab fa-facebook-square</v-icon
                    >
                  </v-card>
                </v-hover>
              </v-col>

              <v-col cols="12" sm="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="d-flex justify-center"
                    color="primary5"
                    :elevation="hover ? 12 : 4"
                    hover
                    min-height="250"
                  >
                    <v-icon style="color: #1DA1F2" x-large
                      >fab fa-twitter-square</v-icon
                    >
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style scoped>
.news-link:hover {
  opacity: 0.7;
}
</style>
