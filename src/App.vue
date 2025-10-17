<template>
  <div class="min-h-screen text-gray-800">
    <header class="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-primary/20">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
  <RouterLink to="/" class="font-bold tracking-wide text-lg flex items-center gap-2">
  <span class="inline-block w-3 h-3 rounded-full" :style="{background: primary}"></span>
  HINATA Quiz
  </RouterLink>
  <div class="text-sm text-gray-600">v{{ version }}</div>
  </div>
</header>

<main class="max-w-5xl mx-auto px-4 py-6">
  <RouterView />
</main>

    <footer class="border-t border-primary/20">
      <div class="max-w-5xl mx-auto px-4 py-6 text-xs text-gray-500">
        © {{ new Date().getFullYear() }} HINATA Quiz
      </div>
    </footer>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useQuizStore } from './store/quiz'


const store = useQuizStore()
const version = computed(() => store.version)
const primary = '#7cc7e8'
</script>