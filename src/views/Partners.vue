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
          RE-SOURCING has brought by collaboration by:
        </div>

        <v-row no-gutters class="mt-2">
          <v-col
            cols="12"
            md="6"
            xl="4"
            v-for="(entity, index) in partners"
            :key="index"
            class="pa-3"
          >
            <v-card
              class="d-flex flex-column flex-sm-row"
              flat
              color="transparent"
            >
              <div class="align-self-center align-self-md-start pa-3">
                <v-img
                  aspect-ratio="1"
                  :src="entity.img"
                  :min-width="$vuetify.breakpoint.xsOnly ? 150 : 100"
                  contain
                ></v-img>
              </div>

              <div class="d-flex flex-column">
                <v-card-title class="primary--text font-weight-bold text-body-1"
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

    <!-- Steering commitee -->
    <v-row no-gutters>
      <v-col class="mx-auto pa-3" cols="12" sm="11" md="10" lg="8" xl="6">
        <v-card color="primary4" elevation="4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text d-flex justify-center"
            >Steering Commitee</v-card-title
          >
          <v-card-text class="text-body-1"
            >The RE-SOURCING Platform Steering Committee (PSC) is a board of
            high-level and valued experts from organisations with a strong role
            on Agenda setting & Advocacy for Responsible Sourcing in Europe and
            globally.</v-card-text
          >

          <v-row no-gutters class="px-2 pb-2">
            <v-col
              class="pa-2"
              cols="12"
              md="6"
              v-for="(entity, index) in steeringCommitee"
              :key="index"
            >
              <v-card class="d-flex flex-row" elevation="4" color="primary5">
                <v-avatar
                  color="accent2"
                  size="62"
                  class="rounded-circle align-self-center ma-3 elevation-4"
                >
                  <v-icon class="white--text" large>far fa-user</v-icon>
                </v-avatar>

                <div>
                  <v-card-title class="pb-1" style="word-break: break-word;">{{
                    entity.title
                  }}</v-card-title>
                  <v-card-text>{{ entity.name }}</v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Advisory board -->
    <v-row no-gutters>
      <v-col class="mx-auto pa-3" cols="12" sm="11" md="10" lg="8" xl="6">
        <v-card color="primary4" elevation="4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text d-flex justify-center"
            >Advisory Board</v-card-title
          >
          <v-card-text class="text-body-1">
            The RE-SOURCING Advisory Board consists of high-level and valued
            experts who will meet regularly with the RE-SOURCING project. The
            Advisory Board provides high-level advice to the project, ensuring
            that all relevant perspectives and aspects are considered in the
            RE-SOURCING project.
          </v-card-text>

          <v-row no-gutters class="px-2 pb-2">
            <v-col
              class="pa-2"
              cols="12"
              md="6"
              v-for="(entity, index) in advisoryBoard"
              :key="index"
            >
              <v-card class="d-flex flex-row" elevation="4" color="primary5">
                <v-avatar
                  color="accent"
                  size="62"
                  class="rounded-circle align-self-center ma-3 elevation-4"
                >
                  <v-icon class="white--text" large>far fa-user</v-icon>
                </v-avatar>

                <div>
                  <v-card-title class="pb-1" style="word-break: break-word;">{{
                    entity.title
                  }}</v-card-title>
                  <v-card-text>{{ entity.name }}</v-card-text>
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
          "The Vienna University of Economics and Business (WU) is a leading academic institution and one of Europe's most attractive universities in business and economics. The Institute for Managing Sustainability has long-standing experience in co-ordinating European research projects (in FP5-7; Horizon 2020), has built up extensive experience in organising stakeholder dialogues and peer learning events by applying various interactive conference and workshop formats in different contexts (e.g. in the FP7 and Horizon 2020 projects MIN-GUIDE, MINLAND, COBALT, DYNAMIX and coordinating the European Sustainable Development Network - ESDN). The Institute for Managing Sustainability has extensive experience with policy analysis (institutions, policy sectors, policies, strategies, etc.) at the EU and EU MS level."
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
    ],
    steeringCommitee: [
      {
        name: "Fiona Solomon",
        title: "Aluminium Stewardship Initiative",
        img: ""
      },
      {
        name: "Matthew Wenban-Smith",
        title: "Responsible Steel",
        img: ""
      },
      {
        name: "Manuel Jose Fernandez",
        title: "CHOCILCO - Chilean Copper Commission",
        img: ""
      },
      {
        name: "Elene Vyboldina",
        title: "EUROMETAUX",
        img: ""
      },
      {
        name: "Jani Kiuru",
        title: "Finnish Minerals Group",
        img: ""
      },
      {
        name: "UMICORE",
        title: "Christian Hagelükken",
        img: ""
      },
      {
        name: "Rodrigo Cortes Lobos",
        title: "Advanced Mining Technology Centre Chile",
        img: ""
      },
      {
        name: "Fleming Voetmann",
        title: "International Copper Association",
        img: ""
      },
      {
        name: "Alejadro Gonzalez",
        title: "GoodElectronics Network / SOMO",
        img: ""
      },
      {
        name: "Grainne Ui Thuama",
        title: "Department: Communications, Climate Action, Environment -IE",
        img: ""
      },
      {
        name: "Renate Schoofs",
        title: "Department of Environment and Spatial Planning (BE:FLanders)",
        img: ""
      },
      {
        name: "Diamantoula Lampou",
        title: "Ministry of Environment and Energy (GR)",
        img: ""
      },
      {
        name: "Carolin Kranz",
        title: "BASF",
        img: ""
      },
      {
        name: "Mark Mistry",
        title: "Nickel Institute",
        img: ""
      }
    ],
    advisoryBoard: [
      {
        name: "Michal Spiechowicz",
        title: "DG GROW, EIP Raw Materials",
        img: ""
      },
      {
        name: "Lucia Manicini",
        title: "EC Joint Research Centre",
        img: ""
      },
      {
        name: "Louis Marechal, Benjamin Katz",
        title: "OECD - Organisation for EconomicCo-operation and Development",
        img: ""
      },
      {
        name: "Leon Riedel (Netherlands Enterprise Agency)",
        title: "European Partnership for Responsible Minerals",
        img: ""
      },
      {
        name: "Antonio Pedro",
        title:
          "UNECA / UN Economic Commission for Africa, Subregional office for East Africa",
        img: ""
      },
      {
        name: "World Bank",
        title: "Kristen Hund",
        img: ""
      },
      {
        name: "Giulia Carbone",
        title: "IUCN / Internation Union for Conservative of Nature",
        img: ""
      },
      {
        name: "Aimee Boulanger",
        title: "IRMA / Initiative for Responsivle Mining Assurance",
        img: ""
      }
    ]
  })
};
</script>

<style scoped></style>
