import Vue from 'vue';
import VueRouter from 'vue-router';

// Import components
import Index from './pages/Index'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import BlogEntries from './assets/posts.json'

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: `/blog/${child.id}`,
    name: child.id,
    component: () => import(`./posts/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('./pages/Blog.vue'),
    children
  }
})

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {path:'/', component: Index},
      {path:'/blog', component: Blog},
      {path:'/projects', component: Projects},
      ...blogRoutes
    ]
});
export default router;
