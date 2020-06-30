import Vue from 'vue';
import VueRouter from 'vue-router';

// Import components
import Main from './pages/Main'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

//import TransactionsIndex from './pages/transactions/index'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {path:'/', component: Main},
      {path:'/blog', component: Blog},
      {path:'/projects', component: Projects, props: {theme: "theme-light"}},
    ]
});
export default router;
