import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/MemesApi.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/RickMortyApi.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/PokemonApi.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
