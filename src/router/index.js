import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue")
  },
  {
    path: "/protected",
    name: "Protected",
    meta: { requiresAuth: true },
    component: () => import("../views/Protected.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { requiresAuth: true },
    component: () => import("../views/Profile.vue")
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // eslint-disable-next-line no-unused-vars
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then(data => {
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch(() => {
        next({ path: "/auth" });
      });
  }
  next();
});

export default router;
