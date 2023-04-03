// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        redirect: 'ko',
      },
      {
        path: ':lang',
        name: 'About',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: ':lang/team',
        name: 'Team',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "team" */ '@/views/Team.vue'),
      },
      {
        path: ':lang/pub',
        name: 'Publication',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "pubs" */ '@/views/Publication.vue'),
      },
      {
        path: ':lang/course',
        name: 'Course',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Course.vue'),
      },
      {
        path: ':lang/project',
        name: 'Project',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Project.vue'),
      },
      {
        path: ':lang/contact',
        name: 'Contact',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
      },
      {
        path: ':lang/:role/:given/:family',
        name: 'Person',
        props: true,
        component: () => import(/* webpackChunkName: "person" */ '@/views/Person.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  mode: 'hash',
  routes,
})

export default router
