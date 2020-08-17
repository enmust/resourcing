<template>
  <div class="target-groups text-justify">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div
          class="text-h4 primary--text font-weight-bold mt-2 d-flex justify-center"
        >
          Industry sectors
        </div>

        <v-row no-gutters>
          <v-col class="mx-auto" cols="12" sm="11" md="10" lg="8" xl="6">
            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                3 Sectors for achieving a sustainable and carbon-neutral Europe
              </v-card-title>

              <v-card-text class="text-h7">
                The European Green Deal marks Europe’s commitment to become the
                world’s first climate-neutral continent by 2050.
                <br />
                <br />
                RE-SOURCING will develop visions & roadmaps for responsible
                sourcing in the three sectors of Renewable Energy, Mobility and
                Electric and Electronic Equipment to guarantee a sustainable
                transition based on environmentally friendly, socially equitable
                and economically profitable sourcing in global mineral value
                chains.
              </v-card-text>
            </v-card>

            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                The RE-SOURCING Sector Roadmap approach
              </v-card-title>

              <v-card-text class="text-h7">
                RE-SOURCING will develop sectoral
                <b class="primary--text">roadmaps</b> for three key European
                industrial sectors describing the current situation (“<b
                  class="primary--text"
                  >state of play</b
                >”), the vision (“<b class="primary--text"
                  >vision for the future</b
                >”) and key actions needed to transverse the distance between
                now and an improved future situation for the responsible
                sourcing (RS) of raw materials (“<b class="primary--text"
                  >milestone achievements</b
                >”).
              </v-card-text>
            </v-card>

            <v-card flat color="transparent">
              <v-card-title class="text-h5 font-weight-bold primary--text">
                Why 3 sectors
              </v-card-title>

              <v-card-text class="text-h7">
                These three sectors represent essential priorities in the
                European long-term vision: the
                <span class="accent2--text font-weight-bold">Mobility</span>
                sector for clean mobility and
                <span class="accent--text font-weight-bold"
                  >Renewable energy</span
                >
                for the fully decarbonised energy supply. The
                <span class="accent3--text font-weight-bold">EEE-sector</span>
                reflects the relevant questions on the conflict mineral
                regulation. Their contribution is essential to achieving the
                targets that have been set by the EU Green Deal. To ensure that
                the ‘output’ from these sectors contributes to the
                sustainability agenda, responsible sourcing practices within
                these sectors need to be strengthened.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <!--              <v-card-title-->
              <!--                style="height: 96px;"-->
              <!--                class="accent2&#45;&#45;text d-flex justify-center font-weight-bold"-->
              <!--                >MOBILITY</v-card-title-->
              <!--              >-->

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="showMobility = !showMobility"
                  class="ma-3"
                  style="border: 8px solid #a7b32a"
                  :elevation="hover ? 24 : 4"
                  :class="
                    hover ? 'elevation-24-accent2' : 'elevation-4-accent2'
                  "
                  hover
                >
                  <v-img
                    :src="require('../assets/img/mobility.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>

                  <v-card-actions
                    class="pa-0"
                    style="background-color: rgba(167, 179, 42, 0.1); border-top: 8px solid #a7b32a"
                  >
                    <v-card-title
                      class="accent2--text font-weight-bold text-uppercase justify-end pb-2 text-center flex-grow-1"
                      style="word-break: break-word"
                      >MOBILITY</v-card-title
                    >
                    <v-spacer />

                    <v-btn
                      icon
                      @click.stop="showMobility = !showMobility"
                      aria-label="toggle mobility text"
                    >
                      <v-icon v-if="showMobility">fas fa-angle-up</v-icon>
                      <v-icon v-else>fas fa-angle-down</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-text
                    class="text-body-1"
                    style="background-color: rgba(167, 179, 42, 0.1) !important;"
                    v-if="showMobility"
                  >
                    <p>
                      <b class="accent2--text">The Mobility Sector (MS)</b>: The
                      mobility sector (manufacture of motor vehicles, trailers
                      and semi-conductors) is one of the largest manufacturing
                      sectors in the EU. In 2017, the transport sector also
                      accounted for 25% of the EU28 GHG emissions. Therefore,
                      the main elements of the European Strategy for
                      Low-emission Mobility include speeding up the deployment
                      of low-emission alternative energy for transport and
                      moving towards zero- emission vehicles.
                    </p>

                    <p>
                      A key strategy for this shift to be successful is the
                      transition to Hybrid and Electric Vehicles; in 2050, 80%
                      of all newly registered passenger cars globally could be
                      powered by alternative drivetrains.3 The key to e-mobility
                      is the production of strong, efficient and a batteries. In
                      the value chain of electric cars, the battery is the most
                      valuable component with a share of 40%. The European
                      Commission projects that the EU batteries market will
                      increase by a factor of 4 to 10 by 2025, creating a market
                      valued at €250 billion/year.4 The focus in the mobility
                      value chain will be the mining of selected materials
                      (lithium, cobalt, graphite and nickel), cell manufacturing
                      and recycling efforts.
                    </p>

                    <p>
                      The mobility sector will focus on the more mature
                      technology of the electric battery, which will be the key
                      component of the sustainability transition agenda in the
                      EU. The electric battery accounts for 40% (in terms of
                      value) of the electric car value chain.
                    </p>

                    <p>
                      The focus of the research in the RE-SOURCING project will
                      be on three nodes within this value chain: the mining of
                      selected minerals, cell manufacturing and recycling.
                    </p>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <!--              <v-card-title-->
              <!--                style="height: 96px;"-->
              <!--                class="accent&#45;&#45;text d-flex justify-center font-weight-bold"-->
              <!--                >RENEWABLE ENERGY</v-card-title-->
              <!--              >-->

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="showEnergy = !showEnergy"
                  class="ma-3"
                  style="border: 8px solid #972e63"
                  :elevation="hover ? 24 : 4"
                  :class="hover ? 'elevation-24-accent' : 'elevation-4-accent'"
                  hover
                >
                  <v-img
                    :src="require('../assets/img/renewable_energy.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>

                  <v-card-actions
                    class="pa-0"
                    style="background-color: rgba(151, 46, 99, 0.1); border-top: 8px solid #972e63"
                  >
                    <v-card-title
                      class="accent--text font-weight-bold text-uppercase justify-end pb-2 text-center flex-grow-1"
                      style="word-break: break-word"
                      >RENEWABLE ENERGY</v-card-title
                    >
                    <v-spacer />

                    <v-btn
                      icon
                      @click.stop="showEnergy = !showEnergy"
                      aria-label="toggle energy text"
                    >
                      <v-icon v-if="showEnergy">fas fa-angle-up</v-icon>
                      <v-icon v-else>fas fa-angle-down</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-text
                    class="text-body-1"
                    style="background-color: rgba(151, 46, 99, 0.1) !important;"
                    v-if="showEnergy"
                  >
                    <p>
                      <b class="accent--text"
                        >The Renewable Energy Sector (RES)</b
                      >: The <b class="accent--text">Renewable Energy</b> Sector
                      includes a host of sources, with 91% of the energy
                      generation currently coming from biomass, hydropower and
                      wind (2017). Solar energy remains an important source of
                      RE for the future. The EU target under the revised
                      Renewable Energy Directive is set at 32% energy from
                      renewable energy sources by 2035. In 2016, the RE industry
                      was valued at €149 billion, providing more than 1.4
                      million jobs in the EU.1 The RE sector directly addresses
                      the EU priority to secure clean and efficient technology.
                      In 2011, the EU accounted for the largest share of global
                      investment in clean energy, but was overtaken by China in
                      2015. Between its peak in 2011 €126 billion), new
                      investments in clean energy in Europe had fallen to €68
                      billion by 2018.
                    </p>

                    <p>
                      Challenges in the sourcing of raw materials within the
                      sector include limited availability of materials, price
                      fluctuations and recycling. The extraction of these
                      minerals is also associated with negative social and
                      environmental impacts, as are practices in the
                      manufacturing of equipment that goes into the RE sector.
                    </p>

                    <p>
                      For the RE sector, this project will focus on the global
                      value chains for wind and solar energy, as these are the
                      fastest growing sources of renewable energy and both
                      require a wide range of metals (copper, steel, aluminium,
                      lead, tin, zinc, rare earth elements, etc.). These have
                      limited availability in the EU and are often imported
                      across chains that stretch from Latin America, Africa and
                      China into the EU.
                    </p>

                    <p>
                      The figure below depicts the focus of the RE-SOURCING
                      project within the RE value chain. Two nodes will be
                      researched in greater detail: the
                      <b class="accent--text">mining & processing stage</b> and
                      the <b class="accent--text">manufacturing stage</b>. As
                      noted, the minerals used in the RE sector come from
                      several countries, mostly outside of the EU. Similarly,
                      while the manufacture of wind turbines is largely based in
                      the EU, the top producers for other RE manufacturing
                      products are located elsewhere. Thus, the RS practices for
                      EU firms, both in procurement of metallic products and of
                      manufactured components are of importance.
                    </p>

                    <p>
                      Within the mining & processing node, the focus will be on
                      <b class="accent--text">copper</b>, as it is needed in all
                      RE sources. Within the manufacturing node, the project
                      team will include
                      <b class="accent--text">industry</b> stakeholders
                      (manufacturers, users, such as electricity suppliers and
                      the recycling firms). A more detailed description of
                      stakeholders and initiatives are provided in the
                      RE-SOURCING State of Play report (March, 2020).
                    </p>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <!--              <v-card-title-->
              <!--                class="accent3&#45;&#45;text d-flex justify-center font-weight-bold"-->
              <!--                style="word-break: break-word; height: 96px"-->
              <!--                >ELECTRONICS & ELECTRONIC EQUIPMENT</v-card-title-->
              <!--              >-->

              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="showElectronics = !showElectronics"
                  class="ma-3"
                  style="border: 8px solid #f0a846"
                  :elevation="hover ? 24 : 4"
                  :class="
                    hover ? 'elevation-24-accent3' : 'elevation-4-accent3'
                  "
                  hover
                >
                  <v-img
                    :src="require('../assets/img/electronics.jpg')"
                    aspect-ratio="1"
                  >
                  </v-img>

                  <v-card-actions
                    class="pa-0"
                    style="background-color: rgba(240, 168, 70, 0.1); border-top: 8px solid #f0a846"
                  >
                    <v-card-title
                      class="accent3--text font-weight-bold text-uppercase justify-end pb-2 flex-grow-1 text-center"
                      style="word-break: break-word"
                      >ELECTRONICS & ELECTRONIC EQUIPMENT</v-card-title
                    >
                    <v-spacer />

                    <v-btn
                      icon
                      @click.stop="showElectronics = !showElectronics"
                      aria-label="toggle electronics text"
                    >
                      <v-icon v-if="showElectronics">fas fa-angle-up</v-icon>
                      <v-icon v-else>fas fa-angle-down</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-text
                    class="text-body-1"
                    style="background-color: rgba(240, 168, 70, 0.1) !important;"
                    v-if="showElectronics"
                  >
                    <p>
                      <b class="accent3--text"
                        >Electric & Electronic Equipment Sector (EEES)</b
                      >: The Electronics sector is one of the largest industries
                      in the world, with approximately 18 million workers who
                      produce 20% of global imports and generate $1.7 trillion
                      trade in electronic products. It is a major contributor to
                      creating economic growth and opportunities across the
                      world and is key for many industries (automotive,
                      healthcare, aeronautics, space, communications, etc.) and
                      users.
                    </p>

                    <p>
                      In Europe, the revenue from the consumer electronics
                      segment is expected to be around USD 78 million (€71
                      million) in 2020; the sales of European semiconductors
                      alone is expected to reach US $3.25 billion (€2.97
                      billion) this year. However, sub-standard working
                      conditions and human rights violations are pervasive along
                      the production value chain. Major RS issues include
                      addressing low wages, toxic chemicals, environmental
                      impacts, child labour, forced labour, etc.
                    </p>

                    <p>
                      The EEES will be key for the industrial modernisation
                      needed for a circular economy and serves a number of key
                      EU manufacturing businesses: automotive (electrification
                      of vehicles and autonomous mobility), Industry 4.0, IoT5
                      devices and systems, 5G, energy, healthcare, aeronautics
                      and space. In 2018, the EC launched a process to update
                      its current Strategy on Electronics that was adopted in
                      2013. The EU Conflict Minerals Regulation has a direct
                      impact on this sector, as EU businesses source both raw
                      materials and semi- manufactured products to manufacture
                      products ranging from laptops to mobile phones and
                      engines.
                    </p>

                    <p>
                      The EEE Sector covers many products from electronic
                      components and boards; computers and peripheral equipment;
                      consumer electronics, electronic and electric wires and
                      cables.
                    </p>

                    <div class="mb-4">
                      <p>
                        The range of materials used in EEE products is
                        relatively extensive. For example, over 34
                        minerals/metallic products are used in the production of
                        automobiles and electronic products, ranging from copper
                        to mica. To focus the research in this sector, two sets
                        of minerals have been identified at this stage:
                      </p>

                      <ul>
                        <li>
                          <b class="accent3--text"
                            >3TG (Tin, Tungsten, Tantalum, Gold)</b
                          >: They have high relevance due to legislation (OECD,
                          EU, Dodd-Frank) that governs RS practices and they
                          have high industry consumption and function
                          criticality (tin, tantalum) for EEE products.
                        </li>

                        <li>
                          <b class="accent3--text">Mica</b>: It has high
                          relevance of the mineral for EEE (as well as the
                          mobility sector) and there is also severe
                          sustainability risks associated with its extraction.
                        </li>
                      </ul>
                    </div>

                    <p>
                      A number of active initiatives have been identified for
                      this sector, including the Responsible Minerals
                      Initiative, GoodElectronics Network and the International
                      Campaign for Responsible Electronics, amongst others.
                    </p>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>

        <!--        <v-row id="card-info" class="mt-3">-->
        <!--          <v-col-->
        <!--            class="mx-auto text-body-1 mobility elevation-8"-->
        <!--            style="color: rgba(0,0,0,0.6)"-->
        <!--            cols="12"-->
        <!--            sm="10"-->
        <!--            md="8"-->
        <!--            lg="6"-->
        <!--            v-show="showMobility"-->
        <!--          >-->
        <!--            <p>-->
        <!--              <b class="primary&#45;&#45;text">The Mobility Sector (MS)</b>: The-->
        <!--              mobility sector (manufacture of motor vehicles, trailers and-->
        <!--              semi-conductors) is one of the largest manufacturing sectors in-->
        <!--              the EU. In 2017, the transport sector also accounted for 25% of-->
        <!--              the EU28 GHG emissions. Therefore, the main elements of the-->
        <!--              European Strategy for Low-emission Mobility include speeding up-->
        <!--              the deployment of low-emission alternative energy for transport-->
        <!--              and moving towards zero- emission vehicles.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              A key strategy for this shift to be successful is the transition-->
        <!--              to Hybrid and Electric Vehicles; in 2050, 80% of all newly-->
        <!--              registered passenger cars globally could be powered by alternative-->
        <!--              drivetrains.3 The key to e-mobility is the production of strong,-->
        <!--              efficient and a batteries. In the value chain of electric cars,-->
        <!--              the battery is the most valuable component with a share of 40%.-->
        <!--              The European Commission projects that the EU batteries market will-->
        <!--              increase by a factor of 4 to 10 by 2025, creating a market valued-->
        <!--              at €250 billion/year.4 The focus in the mobility value chain will-->
        <!--              be the mining of selected materials (lithium, cobalt, graphite and-->
        <!--              nickel), cell manufacturing and recycling efforts.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              The mobility sector will focus on the more mature technology of-->
        <!--              the electric battery, which will be the key component of the-->
        <!--              sustainability transition agenda in the EU. The electric battery-->
        <!--              accounts for 40% (in terms of value) of the electric car value-->
        <!--              chain.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              The focus of the research in the RE-SOURCING project will be on-->
        <!--              three nodes within this value chain: the mining of selected-->
        <!--              minerals, cell manufacturing and recycling.-->
        <!--            </p>-->
        <!--          </v-col>-->

        <!--          <v-col-->
        <!--            class="mx-auto text-body-1 energy elevation-8"-->
        <!--            style="color: rgba(0,0,0,0.6)"-->
        <!--            cols="12"-->
        <!--            sm="10"-->
        <!--            md="8"-->
        <!--            lg="6"-->
        <!--            v-show="showEnergy"-->
        <!--          >-->
        <!--            <p>-->
        <!--              <b class="primary&#45;&#45;text">The Renewable Energy Sector (RES)</b>:-->
        <!--              The <b class="primary&#45;&#45;text">Renewable Energy</b> Sector includes-->
        <!--              a host of sources, with 91% of the energy generation currently-->
        <!--              coming from biomass, hydropower and wind (2017). Solar energy-->
        <!--              remains an important source of RE for the future. The EU target-->
        <!--              under the revised Renewable Energy Directive is set at 32% energy-->
        <!--              from renewable energy sources by 2035. In 2016, the RE industry-->
        <!--              was valued at €149 billion, providing more than 1.4 million jobs-->
        <!--              in the EU.1 The RE sector directly addresses the EU priority to-->
        <!--              secure clean and efficient technology. In 2011, the EU accounted-->
        <!--              for the largest share of global investment in clean energy, but-->
        <!--              was overtaken by China in 2015. Between its peak in 2011 €126-->
        <!--              billion), new investments in clean energy in Europe had fallen to-->
        <!--              €68 billion by 2018.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              Challenges in the sourcing of raw materials within the sector-->
        <!--              include limited availability of materials, price fluctuations and-->
        <!--              recycling. The extraction of these minerals is also associated-->
        <!--              with negative social and environmental impacts, as are practices-->
        <!--              in the manufacturing of equipment that goes into the RE sector.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              For the RE sector, this project will focus on the global value-->
        <!--              chains for wind and solar energy, as these are the fastest growing-->
        <!--              sources of renewable energy and both require a wide range of-->
        <!--              metals (copper, steel, aluminium, lead, tin, zinc, rare earth-->
        <!--              elements, etc.). These have limited availability in the EU and are-->
        <!--              often imported across chains that stretch from Latin America,-->
        <!--              Africa and China into the EU.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              The figure below depicts the focus of the RE-SOURCING project-->
        <!--              within the RE value chain. Two nodes will be researched in greater-->
        <!--              detail: the-->
        <!--              <b class="primary&#45;&#45;text">mining & processing stage</b> and the-->
        <!--              <b class="primary&#45;&#45;text">manufacturing stage</b>. As noted, the-->
        <!--              minerals used in the RE sector come from several countries, mostly-->
        <!--              outside of the EU. Similarly, while the manufacture of wind-->
        <!--              turbines is largely based in the EU, the top producers for other-->
        <!--              RE manufacturing products are located elsewhere. Thus, the RS-->
        <!--              practices for EU firms, both in procurement of metallic products-->
        <!--              and of manufactured components are of importance.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              Within the mining & processing node, the focus will be on-->
        <!--              <b class="primary&#45;&#45;text">copper</b>, as it is needed in all RE-->
        <!--              sources. Within the manufacturing node, the project team will-->
        <!--              include <b class="primary&#45;&#45;text">industry</b> stakeholders-->
        <!--              (manufacturers, users, such as electricity suppliers and the-->
        <!--              recycling firms). A more detailed description of stakeholders and-->
        <!--              initiatives are provided in the RE-SOURCING State of Play report-->
        <!--              (March, 2020).-->
        <!--            </p>-->
        <!--          </v-col>-->

        <!--          <v-col-->
        <!--            class="mx-auto text-body-1 electronics elevation-8"-->
        <!--            style="color: rgba(0,0,0,0.6)"-->
        <!--            cols="12"-->
        <!--            sm="10"-->
        <!--            md="8"-->
        <!--            lg="6"-->
        <!--            v-show="showElectronics"-->
        <!--          >-->
        <!--            <p>-->
        <!--              <b class="primary&#45;&#45;text"-->
        <!--                >Electric & Electronic Equipment Sector (EEES)</b-->
        <!--              >: The Electronics sector is one of the largest industries in the-->
        <!--              world, with approximately 18 million workers who produce 20% of-->
        <!--              global imports and generate $1.7 trillion trade in electronic-->
        <!--              products. It is a major contributor to creating economic growth-->
        <!--              and opportunities across the world and is key for many industries-->
        <!--              (automotive, healthcare, aeronautics, space, communications, etc.)-->
        <!--              and users.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              In Europe, the revenue from the consumer electronics segment is-->
        <!--              expected to be around USD 78 million (€71 million) in 2020; the-->
        <!--              sales of European semiconductors alone is expected to reach US-->
        <!--              $3.25 billion (€2.97 billion) this year. However, sub-standard-->
        <!--              working conditions and human rights violations are pervasive along-->
        <!--              the production value chain. Major RS issues include addressing low-->
        <!--              wages, toxic chemicals, environmental impacts, child labour,-->
        <!--              forced labour, etc.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              The EEES will be key for the industrial modernisation needed for a-->
        <!--              circular economy and serves a number of key EU manufacturing-->
        <!--              businesses: automotive (electrification of vehicles and autonomous-->
        <!--              mobility), Industry 4.0, IoT5 devices and systems, 5G, energy,-->
        <!--              healthcare, aeronautics and space. In 2018, the EC launched a-->
        <!--              process to update its current Strategy on Electronics that was-->
        <!--              adopted in 2013. The EU Conflict Minerals Regulation has a direct-->
        <!--              impact on this sector, as EU businesses source both raw materials-->
        <!--              and semi- manufactured products to manufacture products ranging-->
        <!--              from laptops to mobile phones and engines.-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              The EEE Sector covers many products from electronic components and-->
        <!--              boards; computers and peripheral equipment; consumer electronics,-->
        <!--              electronic and electric wires and cables.-->
        <!--            </p>-->

        <!--            <div class="mb-4">-->
        <!--              <p>-->
        <!--                The range of materials used in EEE products is relatively-->
        <!--                extensive. For example, over 34 minerals/metallic products are-->
        <!--                used in the production of automobiles and electronic products,-->
        <!--                ranging from copper to mica. To focus the research in this-->
        <!--                sector, two sets of minerals have been identified at this stage:-->
        <!--              </p>-->

        <!--              <ul>-->
        <!--                <li>-->
        <!--                  <b class="primary&#45;&#45;text"-->
        <!--                    >3TG (Tin, Tungsten, Tantalum, Gold)</b-->
        <!--                  >: They have high relevance due to legislation (OECD, EU,-->
        <!--                  Dodd-Frank) that governs RS practices and they have high-->
        <!--                  industry consumption and function criticality (tin, tantalum)-->
        <!--                  for EEE products.-->
        <!--                </li>-->

        <!--                <li>-->
        <!--                  <b class="primary&#45;&#45;text">Mica</b>: It has high relevance of-->
        <!--                  the mineral for EEE (as well as the mobility sector) and there-->
        <!--                  is also severe sustainability risks associated with its-->
        <!--                  extraction.-->
        <!--                </li>-->
        <!--              </ul>-->
        <!--            </div>-->

        <!--            <p>-->
        <!--              A number of active initiatives have been identified for this-->
        <!--              sector, including the Responsible Minerals Initiative,-->
        <!--              GoodElectronics Network and the International Campaign for-->
        <!--              Responsible Electronics, amongst others.-->
        <!--            </p>-->
        <!--          </v-col>-->
        <!--        </v-row>-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TargetGroups",
  data: () => ({
    showMobility: false,
    showEnergy: false,
    showElectronics: false
  }),
  methods: {
    toggleCardInfo(name) {
      this.$vuetify.goTo("#card-info");
      if (name === "mobility") {
        this.showMobility = true;
        this.showEnergy = false;
        this.showElectronics = false;
      } else if (name === "energy") {
        this.showMobility = false;
        this.showEnergy = true;
        this.showElectronics = false;
      } else {
        this.showMobility = false;
        this.showEnergy = false;
        this.showElectronics = true;
      }
    }
  }
};
</script>

<style scoped>
.elevation-4-accent {
  box-shadow: 0px 2px 4px -1px rgba(151, 46, 99, 0.4),
    0px 4px 5px 0px rgba(151, 46, 99, 0.28),
    0px 1px 10px 0px rgba(151, 46, 99, 0.24) !important;
}

.elevation-4-accent2 {
  box-shadow: 0px 2px 4px -1px rgba(167, 179, 42, 0.4),
    0px 4px 5px 0px rgba(167, 179, 42, 0.28),
    0px 1px 10px 0px rgba(167, 179, 42, 0.24) !important;
}

.elevation-4-accent3 {
  box-shadow: 0px 2px 4px -1px rgba(248, 168, 70, 0.4),
    0px 4px 5px 0px rgba(248, 168, 70, 0.28),
    0px 1px 10px 0px rgba(248, 168, 70, 0.24) !important;
}

.elevation-24-accent {
  box-shadow: 0px 11px 15px -7px rgba(151, 46, 99, 0.4),
    0px 24px 38px 3px rgba(151, 46, 99, 0.28),
    0px 9px 46px 8px rgba(151, 46, 99, 0.24) !important;
}

.elevation-24-accent2 {
  box-shadow: 0px 11px 15px -7px rgba(167, 179, 42, 0.4),
    0px 24px 38px 3px rgba(167, 179, 42, 0.28),
    0px 9px 46px 8px rgba(167, 179, 42, 0.24) !important;
}

.elevation-24-accent3 {
  box-shadow: 0px 11px 15px -7px rgba(248, 168, 70, 0.4),
    0px 24px 38px 3px rgba(248, 168, 70, 0.28),
    0px 9px 46px 8px rgba(248, 168, 70, 0.24) !important;
}
</style>
