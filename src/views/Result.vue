<template>
  <section class="space-y-6">
    <div class="bg-white rounded-2xl border border-primary/30 p-6">
      <h2 class="text-xl font-bold">結果</h2>
        <div class="mt-4 grid sm:grid-cols-3 gap-4 text-center">
          <div class="bg-sky-50 rounded-xl p-4 border border-primary/20">
            <div class="text-sm text-gray-600">正解数</div>
          <div class="text-2xl font-bold">{{ store.score }}</div>
      </div>
      <div class="bg-sky-50 rounded-xl p-4 border border-primary/20">
        <div class="text-sm text-gray-600">不正解数</div>
        <div class="text-2xl font-bold">{{ wrong }}</div>
      </div>
      <div class="bg-sky-50 rounded-xl p-4 border border-primary/20">
        <div class="text-sm text-gray-600">正解率</div>
        <div class="text-2xl font-bold">{{ store.percent }}%</div>
      </div>
    </div>

    <div class="mt-6">
      <details class="bg-white rounded-xl border border-primary/20 p-4">
        <summary class="cursor-pointer select-none font-medium">各問題の結果</summary>
        <ul class="mt-3 space-y-2 text-sm">
          <li v-for="(q, i) in store.questions" :key="q.id" class="p-3 rounded-lg border"
          :class="isCorrect(i) ? 'border-green-400 bg-green-50' : 'border-red-300 bg-red-50'">
            <div class="font-semibold">Q{{ i+1 }}. {{ q.question }}</div>
            <div class="mt-1">あなたの回答：{{ labelAnswer(i) }}</div>
            <div>正解：{{ labelCorrect(q) }}</div>
          </li>
        </ul>
      </details>
    </div>

    <div class="mt-6 flex gap-3">
      <RouterLink to="/quiz" class="px-5 py-3 rounded-xl text-white font-semibold" :style="{ background: primary }" @click="restart">もう一度</RouterLink>
      <RouterLink to="/" class="px-5 py-3 rounded-xl border">トップへ</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useQuizStore } from '../store/quiz'

const store = useQuizStore()
const primary = '#7cc7e8'

const wrong = computed(() => store.questions.length - store.score)

function isCorrect(i) {
  const ans = store.answers[i]
  return ans?.isCorrect
}

function labelAnswer(i) {
  const ans = store.answers[i]
  const q = store.questions[i]
  if (!ans) return '—'
  return q.options[ans.selectedIndex]
}

function labelCorrect(q) {
  return q.options[q.correctIndex]
}

function restart() {
  store.start()
}
</script>