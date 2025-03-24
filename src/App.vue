

<template>
  <UApp>
    <div class="w-screen h-screen">
      <div v-if="isLoggedIn" >
        <UButton icon="i-lucide-log-out" variant="outlined" @click="handleSignOut">Se déconnecter</UButton>
      </div>
      <RouterView />
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import router from './router';

const isLoggedIn = ref(false);
let auth: Auth;



const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  })
};


onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})
</script>