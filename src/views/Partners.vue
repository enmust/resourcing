<template>
  <div class="partners">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 primary--text font-weight-bold mt-2">
          The RE-SOURCING project is implemented by a consortium of 11 partners
          from 9 countries:
        </div>

        <v-row no-gutters class="mt-2 text-justify">
          <v-col
            cols="12"
            lg="6"
            v-for="(entity, index) in partners"
            :key="index"
            class="pa-3"
          >
            <v-card
              class="d-flex flex-column flex-sm-row"
              flat
              color="transparent"
            >
              <div class="align-self-center align-self-lg-start pa-3">
                <v-img
                  aspect-ratio="1.77778"
                  :src="entity.img"
                  :min-width="$vuetify.breakpoint.xsOnly ? 250 : 200"
                  contain
                ></v-img>
              </div>

              <div class="d-flex flex-column">
                <v-card-title
                  class="primary--text font-weight-bold text-body-1"
                  style="word-break: break-word;"
                  >{{ entity.name }},
                  <a
                    :href="`https://${entity.link}`"
                    target="PartnerWindow"
                    class="ml-1"
                    >{{ entity.link }}</a
                  ></v-card-title
                >
                <v-card-text class="text-body-1">{{ entity.text }}</v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data: () => ({
    partners: [
      {
        name:
          "WIRTSCHAFTSUNIVERSITAT WIEN, Institute for Managing Sustainability, Austria",
        link: "www.wu.ac.at",
        img: require("../assets/logos/WU.jpg"),
        text:
          "The Vienna University of Economics and Business (WU) is a leading academic institution and one of Europe's most attractive universities in business and economics. The Institute for Managing Sustainability has long-standing experience in co-ordinating European research projects (in FP5-7; Horizon 2020), has built up extensive experience in organising stakeholder dialogues and peer learning events by applying various interactive conference and workshop formats in different contexts (e.g. in the FP7 and Horizon 2020 projects MIN-GUIDE, MINLAND, COBALT, DYNAMIX and coordinating the European Sustainable Development Network - ESDN). The Institute for Managing Sustainability has extensive experience with policy analysis (institutions, policy sectors, policies, strategies, etc.) at the EU and EU MS level."
      },
      {
        name: "MH Intelligence (UK) LTD, United Kingdom",
        link: "www.minehutte.com",
        img: require("../assets/logos/MineHutte.jpg"),
        text:
          "MineHutte is a global resource for regulatory risk ratings and analysis for the mining sector with a team of international legal and policy experts and development economists. MineHutte's objective 17-factor benchmarking system analyses regulatory risk, focusing on mining codes and regulations, environmental legislation, reviews of international best practice, voluntary codes of conduct and responsible mining standards. MineHutte aims to provide rich, intelligent and objective information to guide investment decisions and public policy in the mining sector. MineHutte has worked with governments and mining companies in Europe, Africa, Canada and Latin America."
      },
      {
        name:
          "OEKO-INSTITUT E.V. - Institut Fuer Angewandte OEKOLOGIE, Germany",
        link: "www.oeko.de",
        img: require("../assets/logos/Öko_Institut.jpg"),
        text:
          "The Oeko-Institut (OEKO) is an independent, non-profit association. The Oeko-Institut can draw on its extensive background in the fields of responsible mining & sourcing, raw-material supply of the EU downstream sectors, raw-material demand of green technologies, circular economy, resource efficiency and critical material issues). OEKO works on a comprehensive SME Due Diligence Support System with regards to minerals and metals and a focus on 3TG."
      },
      {
        name: "AHK Business Center, Chile",
        link: "www.camchal.cl",
        img: require("../assets/logos/AHK.jpg"),
        text:
          'AHK Business Center, locally known as "CAMCHAL", will bring in expertise from the "Competence Centre for Mining and Mineral Resources" and the Chilean-German network Eco Mining Concepts. AHK Business Center will provide its network in the Latin-American mining industry to share and promote the project findings and discuss them with the interested regional actors. AHK Chile will be in charge of the organisation of the Global Advocacy Workshop (Latin America)'
      },
      {
        name: "WWF DEUTSCHLAND, Germany",
        link: "www.wwf.de",
        img: require("../assets/logos/WWF.jpg"),
        text:
          "WWF is the world's leading conservation organization. WWF works to help local communities conserve the natural resources they depend upon, transform markets and policies toward sustainability, protect and restore species and their habitats. WWF has expertise in the fields of sustainable supply chains, responsible business, mining and energy within certain landscapes. WWF can provide links to civil society and international organisations, which are essential for RE-SOURCING."
      },
      {
        name: "Stichting Onderzoek Multinationale Ondernemingen, Netherlands",
        link: "www.somo.nl",
        img: require("../assets/logos/SOMO.jpg"),
        text:
          "The Centre for Research on Multinational Corporations (SOMO) is a critical, independent, not-for-profit knowledge centre on multinationals. Since 1973, SOMO has investigated multinational corporations and the impact of their activities on people and the environment. SOMO provides custom-made services (research, consulting and training) to non-profit organisations and the public sector. SOMO strengthens collaboration between civil society organisations through its worldwide network. As a centre of knowledge on key issues, SOMO drives analysis and pursues strategies aimed at social and sustainable change."
      },
      {
        name: "WORLD RESOURCES FORUM ASSOCIATION, Switzerland",
        link: "www.wrforum.org",
        img: require("../assets/logos/World_resources_forum.jpg"),
        text:
          "The World Resources Forum Association (WRFA) is an independent non-profit international organization that serves as a platform connecting and fostering knowledge exchange on resources management amongst business leaders, policy-makers, NGOs, scientists and the public. The World Resources Forum (WRF) conference is the WRFA’s flagship event and is held annually. WRFA is also involved in multi-stakeholder dialogue projects such as the H2020 projects FORAM, CEWASTE and CICERONE, and various development cooperation programs, among others the Sustainable Recycling Industries (SRI) programme and several UN initiatives."
      },
      {
        name: "MONTANUNIVERSITÄT LEOBEN, Austria",
        link: "www.unileoben.ac.at",
        img: require("../assets/logos/Montan_Universitat.jpg"),
        text:
          "Montanuniversität Leoben (MUL) is one of Europe's leading technical universities in mineral exploration, extraction, and minerals policy expertise. MUL can draw on its global network in mineral resources production, as well as its extensive experience from managing and involvement with a number of EIT (?) / KIC and FP6, FP7 and H2020 projects (e.g. MIN-GUIDE, MIREU, MINLAND). MUL is a core partner of EIT RawMaterials and is the Regional Center for East and South East Europe (ESEE Region). It is currently participating in more than 40 innovation projects and has extensive contacts with RE sector manufacturing companies."
      },
      {
        name: "EIT RAW MATERIALS GMBH, Germany",
        link: "www.eitrawmaterials.eu",
        img: require("../assets/logos/EIT_RawMaterials.png"),
        text:
          "EIT RawMaterials is the largest consortium in the raw materials sector worldwide. EIT RawMaterials’ vision is to develop raw materials into a major strength for Europe. Its mission is to enable sustainable competitiveness of the European minerals, metals and materials sector along the value chain by driving innovation, education and entrepreneurship. Partners of EIT RawMaterials are active across the entire raw materials value chain; from exploration, mining and mineral processing to substitution, recycling and circular economy. EIT RawMaterials will communicate the benefits of establishing a competitive advantage of responsible sourcing to their network and will help find alternative ways of funding for promising flagship cases and technologies for responsible sourcing."
      },
      {
        name: "Tallinn University Of Technology, Estonia",
        link: "www.taltech.ee",
        img: require("../assets/logos/TalTech.jpg"),
        text:
          "Tallinn University of Technology (TalTech) is the flagship of Estonian engineering and technology education. The mission of TalTech is to support Estonia's sustainable development through R&D and science-based higher education in the field of engineering, technology, natural and social sciences. TalTech covers all raw materials sector value chain aspects from exploration, mining, manufacturing to a circular economy and social aspects. TalTech has extensive experience in applying innovative learning processes, e.g. using high-level e-learning systems and special video capture tools."
      },
      {
        name: "Lulea Tekniska Universitet, Sweden",
        link: "www.ltu.se",
        img: require("../assets/logos/Lulea_Universitet.jpg"),
        text:
          "Luleå University of Technology (LTU) develops the attractive sustainable society through research and education. Many of LTU research subjects are related to different aspects of sustainability: natural resource management, sustainable urban development, waste management and recycling. LTU will utilise its connection with the Swedish and European mineral industry through its affiliation to boards and expert groups, as well as with international non-EU partner universities and organisations."
      }
    ]
  })
};
</script>

<style scoped></style>
