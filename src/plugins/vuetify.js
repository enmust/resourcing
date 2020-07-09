import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1c5469",
        primary2: "#397992",
        primary3: "#7cb0bd",
        primary4: "#c6dde3",
        primary5: "#eef4f5",
        accent: "#972e63",
        accent2: "#a7b32a",
        accent3: "#f0a846",
        secondary: "#607D8B",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        mineral: "#E91E63",
        rock: "#0288D1",
        meteorite: "#689F38"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
