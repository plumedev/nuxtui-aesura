import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginViewVue,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }, // Route protégée
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView/RegisterView.vue'),
    },
  ],
})

// Ajouter une garde de navigation globale
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Cette route nécessite une authentification, vérifier si l'utilisateur est connecté
    if (!authStore.isLoggedIn) {
      // L'utilisateur n'est pas connecté, rediriger vers la page de login
      next({ name: 'login' })
    } else {
      // L'utilisateur est connecté, continuer
      next()
    }
  } else {
    // La route ne nécessite pas d'authentification, continuer
    next()
  }
})

export default router