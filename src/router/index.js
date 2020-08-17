import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "purpose_and_objectives",
        name: "Purpose and objectives",
        component: () => import("../views/PurposeAndObjectives.vue")
      },
      {
        path: "partners",
        name: "Partners",
        component: () => import("../views/Partners.vue")
      }
    ]
  },
  {
    path: "/target_groups",
    name: "Target groups",
    component: () => import("../views/TargetGroups.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/knowledge_hub",
    name: "Knowledge hub",
    component: () => import("../views/KnowledgeHub.vue"),
    children: [
      {
        path: "wiki_on_rs",
        name: "Wiki on rs",
        component: () => import("../views/WikiOnRs.vue")
      },
      {
        path: "flagship_cases",
        name: "Flagship cases",
        component: () => import("../views/FlagshipCases.vue")
      },
      {
        path: "roadmaps",
        name: "Roadmaps",
        component: () => import("../views/Roadmaps.vue")
      },
      {
        path: "sector_state_of_plays",
        name: "Sector state of plays",
        component: () => import("../views/SectorStateOfPlays.vue")
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/legal_notice",
    name: "Legal notice",
    component: () => import("../views/LegalNotice.vue")
  },
  {
    path: "/privacy_policy",
    name: "Privacy policy",
    component: () => import("../views/PrivacyPolicy.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
