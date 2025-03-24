import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ui from '@nuxt/ui/vue-plugin'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VueFire } from 'vuefire';
import { firebaseConfig } from '@/firebase';

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)
app.use(VueFire, {
    // imported above but could also just be created here
    firebase,
    modules: [],
  } as any);

app.mount('#app')
