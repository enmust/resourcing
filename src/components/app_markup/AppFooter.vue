<template>
  <v-footer class="footer" color="primary2" dark padless>
    <v-card flat tile width="100%" class="transparent">
      <v-row no-gutters class="py-4 px-2">
        <v-col
          cols="12"
          md="6"
          class="pa-2 d-flex flex-row justify-space-around"
        >
          <div class="align-self-center mr-2">
            <v-img
              :src="require('../../assets/logos/1200px-Flag_of_Europe.svg.png')"
              max-width="100"
            ></v-img>
          </div>

          <div class="align-self-center ml-2">
            This project has received funding from the European Union's Horizon
            2020 research and innovation program under Grant Agreement No.
            869276
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="pa-2 d-flex">
          <div class="flex-grow-1"></div>

          <div>
            <p class="mb-0 font-weight-bold">Quick links</p>
            <ul>
              <li v-for="link in quickLinks" :key="link.name">
                <router-link
                  v-if="!link.isLink"
                  class="white--text link"
                  :to="link.url"
                  >{{ link.name }}</router-link
                >
                <a v-else class="white--text link" :href="link.url" target="PrivacyWindow" rel="noopener noreferrer">{{
                  link.name
                }}</a>
              </li>
            </ul>
          </div>

          <div class="flex-grow-1"></div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
          class="pa-2 coordinated-by align-self-center d-flex"
        >
          <div class="flex-grow-1"></div>

          <div>
            <p class="font-weight-bold">Coordinated by:</p>
            <p class="font-weight-bold">
              Vienna University of Economics and Business,
            </p>
            <p class="font-weight-bold">
              Institute for Managing Sustainability
            </p>
            <p>Welthandelsplatz 1A</p>
            <p>1020 Vienna</p>
            <p>
              email:
              <a class="white--text link" href="mailto:info@re-sourcing.eu"
                >info@re-sourcing.eu</a
              >
            </p>
          </div>

          <div class="flex-grow-1 flex-sm-grow-0"></div>
        </v-col>
      </v-row>
    </v-card>

    <v-toolbar
      class="bottom-toolbar"
      color="primary3"
      dense
      height="38"
    ></v-toolbar>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    quickLinks: [
      {
        name: "Contact us",
        url: "/contact"
      },
      {
        name: "Partners",
        url: "/about/partners"
      },
      {
        name: "News",
        url: "/news"
      },
      {
        name: "Legal Notice & Privacy Policy",
        url:
          "https://re-sourcing.eu/files/RE-SOURCING%20website%20%E2%80%93%20Privacy%20Policy%20and%20Legal%20Notice%20v%201.0%20(2020-03-02).pdf",
        isLink: true
      }
    ]
  })
};
</script>

<style scoped>
.footer {
  -webkit-box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.2),
    0 -4px 5px 0 rgba(0, 0, 0, 0.14), 0 -1px 10px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.2),
    0 -4px 5px 0 rgba(0, 0, 0, 0.14), 0 -1px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.bottom-toolbar {
  -webkit-box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) !important;
}

.link {
  opacity: 1;
  transition: opacity 200ms ease-out;
}
.link:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 200ms ease-out;
}

.coordinated-by p {
  margin-bottom: 0;
}
</style>
