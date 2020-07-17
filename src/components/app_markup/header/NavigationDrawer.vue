<template>
  <v-navigation-drawer
    :value="drawer"
    @input="$emit('update:drawer', $event)"
    app
    temporary
    dark
    style="z-index: 2001"
    color="primary"
  >
    <v-list dense>
      <v-subheader>ROUTES</v-subheader>
      <v-list-item
        v-for="item in externalResources"
        :key="item.text"
        :title="item.text"
        :to="item.url"
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    externalResources: [
      {
        icon: "fas fa-home",
        text: "Home",
        url: "/"
      },
      {
        icon: "far fa-address-card",
        text: "About",
        url: "/about"
      },
      {
        icon: "far fa-flag",
        text: "Purpose and objectives",
        url: "/about/purpose_and_objectives"
      },
      {
        icon: "far fa-handshake",
        text: "Partners",
        url: "/about/partners"
      },
      {
        icon: "fas fa-users",
        text: "Target groups",
        url: "/target_groups"
      },
      {
        icon: "far fa-newspaper",
        text: "News",
        url: "/news"
      },
      {
        icon: "far fa-calendar-alt",
        text: "Events",
        url: "/events"
      },
      {
        icon: "fas fa-info-circle",
        text: "Knowledge hub",
        url: "/knowledge_hub"
      },
      {
        icon: "far fa-address-book",
        text: "Contact",
        url: "/contact"
      }
    ]
  })
};
</script>

<style scoped></style>
