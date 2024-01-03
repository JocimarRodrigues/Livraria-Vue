import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LivrosView from '../views/LivrosView.vue'
import CardComponent from '@/components/CardComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import AdicionaLivroComponent from '@/components/AdicionaLivroComponent.vue'
import EditaLivroComponent from '@/components/EditaLivroComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/livros',
    component: LivrosView,
    children: [
      {
        path: ':id',
        name: 'CardComponent',
        component: CardComponent
      },
      {
        path: 'adicionaLivro',
        name: 'AdicionaLivroComponent',
        component: AdicionaLivroComponent
      },
      {
        path: 'editaLivro',
        name: 'EditaLivroComponent',
        component: EditaLivroComponent
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
