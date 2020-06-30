import Vue from 'vue';
import VueRouter from 'vue-router';

// Import components
import Index from './pages/Index'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import BlogIndex from './pages/BlogIndex'
import BlogEntries from './assets/posts.json'

const blogRoutes = []
Object.keys(BlogEntries).map(section => {
  BlogEntries[section].forEach(entry => {blogRoutes.push({
    path: `/blog/post/${entry.id}`,
    name: entry.id,
    component: () => import(`./assets/posts/${section}/${entry.id}.md`)
  })})
})

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {path:'/', component: Index},
      {path:'/blog', component: Blog,
        children: [
          {path: '/', component: BlogIndex},
          ...blogRoutes
        ]
      },
      {path:'/projects', component: Projects},
      //...blogRoutes
    ]
});
export default router;
