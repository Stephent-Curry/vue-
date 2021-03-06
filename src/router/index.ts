import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/",
		name: "Home",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
