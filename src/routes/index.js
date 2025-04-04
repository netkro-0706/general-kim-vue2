import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView"
import AskView from "../views/AskView.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
  ],
})
