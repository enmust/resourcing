<template>
  <div class="about transparent text-justify" v-if="$route.name === 'About'">
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
        <div class="text-h5 primary--text font-weight-bold mt-2">
          RE-SOURCING will deliver...
        </div>

        <v-card flat color="transparent">
          <v-card-title class="primary--text font-weight-bold"
            >... for EU and international business stakeholders:</v-card-title
          >

          <div class="text-h7 px-4 pb-4">
            <ul>
              <li>
                Increased capacity for implementing responsible business conduct
                and compliance with current and upcoming regulations
              </li>
              <li>
                Better understanding of Responsible Sourcing and your role in it
                in three key sectors of the EU’s Green Deal: automotive,
                electric and electronic equipment, and renewable energy
              </li>
              <li>
                Lasting and stable sectoral framework conditions of RS for
                competitive and future-oriented EU markets
              </li>
            </ul>
          </div>
        </v-card>

        <v-card flat color="transparent">
          <v-card-title class="primary--text font-weight-bold"
            >... for EU policymakers:</v-card-title
          >

          <div class="text-h7 px-4 pb-4">
            <ul>
              <li>
                Increased capacity for RS policy design and implementation
              </li>
              <li>
                Innovative ideas on policy recommendations for stimulating RS in
                the private sector
              </li>
              <li>
                Better understanding and awareness of RS in three sectors:
                automotive, electric and electronic equipment, and renewable
                energy
              </li>
            </ul>
          </div>
        </v-card>

        <v-card flat color="transparent">
          <v-card-title class="primary--text font-weight-bold"
            >... for Civil Society:</v-card-title
          >

          <div class="text-h7 px-4 pb-4">
            <ul>
              <li>
                Integration of sustainable development and environmental
                concerns into the RS discourse
              </li>
              <li>
                an established global level playing field of RS in international
                political fora and business agendas
              </li>
              <li>
                Better understanding and awareness of RS in three sectors:
                automotive, electric and electronic equipment, and renewable
                energy
              </li>
            </ul>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <router-view v-else />
</template>
