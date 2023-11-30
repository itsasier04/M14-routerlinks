import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import DestinationShow from '@/components/DestinationShow.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/:id/:slug', name: 'destination.show', component: DestinationShow, props: (route) => ({
      id: Number(route.params.id),
    }),
    children: [
      { path: ':experienceSlug', name: 'experience.show', component: () => import('../components/ExperienceShow.vue'),
      props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }]},
];


const router = createRouter({history: createWebHistory(),routes});
export default router;