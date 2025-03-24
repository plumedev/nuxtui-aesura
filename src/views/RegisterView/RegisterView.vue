<template>
    <div class=" w-screen h-screen flex flex-col items-center justify-center ">
        <form class="flex flex-col items-center justify-center gap-y-4">
            <div class="logo">
                <img src="@/assets/images/aesura.svg" alt="" srcset="">
            </div>
            <UInput color="primary" icon="i-lucide-at-sign" size="xl" placeholder="Mail" class="w-full" v-model="email" />
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
            <UButton block size="xl" leading="true" @click="register()">Créer avec un mail</UButton>
            <USeparator label="OU" color="primary" />
            <UButton block size="xl" leading-icon="i-lucide-key-round" leading="true" color="neutral" @click="signInWithGoogle">Créer un compte avec google</UButton>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import router from '@/router';

const show = ref(false)
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')

const register = () =>  {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log("Successfully registered!");
        router.push('/');
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    }
    )
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/");
        })
        .catch((error) => {
            console.log(error.message)
        })
}

</script>