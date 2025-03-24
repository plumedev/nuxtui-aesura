

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
import router from "@/router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ref } from 'vue';

const show = ref(false)
const email = ref('')
const password = ref('')
const errMsg = ref()

const register = () =>  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        data
        console.log("Successfully sign in!");
        router.push('/');
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
        alert(error.message);
    }
    )
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(() => {
            router.push("/home");
        })
        .catch((error) => {
            console.log(error.message)
        })
}
</script>>