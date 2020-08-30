<template>
  <div class="wiki_on_rs white--text">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 font-weight-bold mt-2">
          WIKI on RS
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify">
            By amalgamating industry knowledge and firm experience, businesses
            can better implement responsible sourcing practices. The knowledge
            hub will act as a library to share information for the wider uptake
            of responsible business practices.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify">
            Responsible sourcing practices are embedded in the wider
            sustainability agenda; they are a means to an end. Numerous
            approaches have been developed by industry and civil society to
            address RS challenges, across global value chains, ranging from
            employing safe and fair labour practices, protecting human rights,
            safeguarding financial integrity, mitigating impacts on the
            environment linked to operations, the social impact on communities
            and inter-related business practices, to name a few.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify">
            Businesses, dependent on their size and location within global value
            chains, have different options to adopt, adapt, implement and report
            on their RS practices. With the multitude of management strategies,
            reporting standards, certification schemes and templates for the
            collection and sharing of information, implementing responsible
            sourcing can be a struggle for the well-intentioned firm.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify">
            More information will be added as the RE-SOURCING project progresses.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "WikiOnRs"
};
</script>

<style scoped></style>
