<template>
  <UContainer>
      <img src="./../assets/images/aesura.svg">
      <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
  </UContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const items = ref([
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/'
    },
    {
      label: 'Budgets',
      icon: 'i-lucide-notebook-tabs',
      description: 'Gérer vos différents budgets',
      to: '/budget'
    },
    
  ]
])
</script>
