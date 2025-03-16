import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/news",
      component: NewsView,
    },
  ],
})
