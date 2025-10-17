<template>
  <section class="space-y-5">
  <ProgressBar :value="progress" />
    <div class="flex items-center justify-between text-sm text-gray-600">
      <div>Q{{ store.index + 1 }} / {{ store.questions.length }}</div>
      <div>正解：<span class="font-semibold">{{ store.score }}</span></div>
      </div>
      <QuestionCard :q="store.current" @select="onSelect" />
      <div class="flex items-center justify-between">
        <button
          class="px-4 py-2 rounded-lg border text-sm"
          @click="goHome"
          >トップへ
        </button>

      <button
        v-if="isLast && store.finishedAt"
        class="px-5 py-3 rounded-xl text-white font-semibold"
        :style="{ background: primary }"
        @click="toResult"
        >結果を見る
      </button>
    </div>
  </section>
</template>


<script setup>
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../store/quiz'
import ProgressBar from '../components/ProgressBar.vue'
import QuestionCard from '../components/QuestionCard.vue'

const router = useRouter()
const store = useQuizStore()
const primary = '#7cc7e8'

const progress = computed(() => store.progress)
const isLast = computed(() => store.index === store.questions.length - 1)

function onSelect(i) {
  store.select(i)
}

watch(() => store.finishedAt, (v) => {
  if (v && isLast.value) {
  }
})

function toResult() { router.push('/result') }
function goHome() { router.push('/') }
</script>