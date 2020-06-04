// import from node_modules (it not contains: "@/...",  "./...", "../../...."")
import Vue from "vue"; // like import a "CLASS/Object/instance/string/etc"
import VueRouter from "vue-router";

// import from project src (it contains: @/, ./, ../..)
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/GroupDraw", // browser
    name: "GroupDraw", // router instance => $router.push('GroupDraw')
    component: () => import("@/views/GroupDraw.vue")
  }
];

const router = new VueRouter({
  routes // config
});

export default router;
