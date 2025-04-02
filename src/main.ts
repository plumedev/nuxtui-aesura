import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ui from '@nuxt/ui/vue-plugin'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VueFire, type VueFireOptions } from 'vuefire';
import { firebaseConfig } from '@/firebase';

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ui)
app.use(VueFire, {
    firebaseApp: firebase,
    modules: [],
  } as VueFireOptions);

app.mount('#app')
