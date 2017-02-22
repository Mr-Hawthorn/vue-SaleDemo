import Vue from 'vue';
import VueRouter from 'vue-router';

import App from "./app.vue";
import Home from './pages/home/home.vue'
import Member from './pages/member/member.vue'
import Class from './pages/class/class.vue'
import Shop from './pages/shop/shop.vue'
import My from './pages/my/my.vue'
import Detail from './pages/detail_pages/detail_pages.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	routes:[
		{path:"/",component:Home},
		{path:"/member",component:Member},
		{path:"/class",component:Class},
		{path:"/shop",component:Shop},
		{path:"/my",component:My},
		{name:"detail",path:"/detail_pages",component:Detail}
	]
})
//指定一开始加载的页面
router.push("/class")

new Vue({
	router,
	render:h=>h(App)
}).$mount("#app")
