<template>
  <div class="project_outputs white--text">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 font-weight-bold mt-2 mb-6">
          Project Reports
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify font-weight-bold pb-1">
            Report 1 (April, 2020): State-of-play: The International Responsible
            Sourcing Agenda
          </v-col>

          <v-col cols="12" class="text-h7 text-justify pb-1">
            This report provides an overview of the current state of responsible
            sourcing practices related to the extraction of minerals and their
            processing. It outlines the challenges that have been identified in
            the economic, social and environmental spheres and analysis how
            current RS approaches are attempting to address these.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify mb-6">
            <a
              class="text-decoration-underline font-italic link white--text"
              href="https://re-sourcing.eu/files/D1.1_In RS template_FINAL.pdf"
              target="ReportWindow"
              rel="noopener noreferrer"
              >Download report</a
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify font-weight-bold pb-1">
            Report 2 (April, 2020): The RE-SOURCING Common Approach
          </v-col>

          <v-col cols="12" class="text-h7 text-justify pb-1">
            The inception report “The RE-SOURCING Common Approach” describes the
            project approach to responsible sourcing, project priorities &
            activities, stakeholder engagement and outlines the project scope
            and topical areas.
          </v-col>

          <v-col
            cols="12"
            class="text-h7 text-justify text-decoration-underline font-italic mb-6"
          >
            <a
              class="text-decoration-underline font-italic link white--text"
              href="https://re-sourcing.eu/files/D1.2_in RS template_FINAL.pdf"
              target="ReportWindow"
              rel="noopener noreferrer"
              >Download report</a
            >
          </v-col>
        </v-row>

        <div class="text-h5 font-weight-bold mt-8 mb-6">
          Briefing Documents
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify font-weight-bold pb-1">
            Briefing Document (1) (September, 2020): Responsible Sourcing: The Case
            for Business Competitiveness
          </v-col>

          <v-col cols="12" class="text-h7 text-justify pb-1">
            As responsible sourcing (RS) requirements increase for businesses in
            mineral and metals supply chains, this first RE-SOURCING Briefing
            Document considers four stages of business engagement with RS
            practices and outlines why RS is going to be a key factor for firms
            to maintain and expand their operations. This Briefing Document
            summarises the findings from the “State-of-Play – The International
            Responsible Sourcing Agenda” Report.
          </v-col>

          <v-col
            cols="12"
            class="text-h7 text-justify text-decoration-underline font-italic mb-6"
          >
            <a
              class="text-decoration-underline font-italic link white--text"
              href="https://re-sourcing.eu/files/RE-SOURCING-Briefing-1-12.9.20.pdf"
              target="ReportWindow"
              rel="noopener noreferrer"
              >Download Briefing Document</a
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectOutputs"
};
</script>

<style scoped></style>
