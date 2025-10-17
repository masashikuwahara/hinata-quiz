<template>
  <section class="space-y-6">
    <div class="text-center">
      <h1 class="text-2xl sm:text-3xl font-bold">日向坂46 クイズ</h1>
    </div>

    <div class="max-w-xl mx-auto">
      <div class="bg-white border border-primary/30 rounded-2xl p-6 text-center">
        <p class="mt-2 text-gray-600">文章＆画像の4択クイズを10問。おひさまなら答えられるはず？</p>
        <RouterLink
        to="/quiz"
        class="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-xl text-white font-semibold"
        :style="{ background: primary }"
        @click="handleStart"
        >
      はじめる
      </RouterLink>
      </div>
    </div>

<div class="max-w-xl mx-auto">
  <div class="bg-white border border-primary/30 rounded-2xl p-5 text-center">
    <h2 class="font-semibold">更新履歴</h2>

    <ul class="mt-3 max-h-48 overflow-y-auto text-sm space-y-2 text-center">
      <li
        v-for="(log, i) in store.changelog"
        :key="i"
        class="flex flex-col items-center gap-1"
      >
        <div class="flex items-center gap-2">
          <span
            class="inline-block w-2 h-2 rounded-full"
            :style="{ background: primary }"
          ></span>
          <div class="font-mono text-gray-700">
            {{ log.date }} <span class="ml-2">v{{ log.version }}</span>
          </div>
        </div>
        <div class="text-gray-600">{{ log.text }}</div>
      </li>
    </ul>
  </div>
</div>

  </section>
</template>


<script setup>
import { useQuizStore } from '../store/quiz'
const store = useQuizStore()
const primary = '#7cc7e8'

function handleStart() {
  store.start()
}
</script>