

<template>
    <div class=" w-screen h-screen flex flex-col items-center justify-center ">
        <form class="flex flex-col items-center justify-center gap-y-4">
            <UInput color="primary" icon="i-lucide-at-sign" size="xl" placeholder="Mail" class="w-full" />
            <UInput
                v-model="password"
                placeholder="Mot de passe"
                :type="show ? 'text' : 'password'"
                size="xl"
                icon="i-lucide-lock"
            >
                <template #trailing>
                <UButton
                    color="neutral"
                    variant="link"
                    :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                    :aria-label="show ? 'Hide password' : 'Show password'"
                    :aria-pressed="show"
                    aria-controls="password"
                    @click="show = !show"
                />
                </template>
            </UInput>
            <UButton block size="xl" leading="true">Se connecter</UButton>
            <USeparator label="OU" color="primary" />
            <UButton block size="xl" leading-icon="i-lucide-key-round" leading="true" color="neutral" @click="signInWithGoogle">Se connecter avec google</UButton>
            <p>Pas encore inscrit ? <ULink raw to="/register" class="font-bold underline">Créer un compte</ULink></p>
        </form>
    </div>    
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from '@/stores/auth'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ref } from 'vue';

const show = ref(false)
const password = ref('')

const router = useRouter();



const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(() => {
            router.push("/home");
            const authStore = useAuthStore();
            authStore.loggedIn = true;
        })
        .catch((error) => {
            console.log(error.message)
        })
}
</script>>