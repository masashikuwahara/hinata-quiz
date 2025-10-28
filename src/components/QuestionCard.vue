<template>
  <div class="bg-white rounded-2xl shadow-sm border border-primary/30 overflow-hidden">
    <div class="p-4 sm:p-6">
    <h2 class="text-lg sm:text-xl font-semibold leading-relaxed">{{ q.question }}</h2>
  </div>

  <div v-if="q.type==='image'" class="px-4 sm:px-6 pb-2">
    <img :src="q.image" :alt="q.alt || ''" class="w-full rounded-xl border object-cover"/>
  </div>

  <div class="grid gap-3 p-4 sm:p-6">
    <button
      v-for="(opt, i) in q.options"
      :key="i"
      class="text-left px-4 py-3 rounded-xl border hover:shadow focus:outline-none focus:ring-2 transition
      bg-white border-primary/40 hover:border-primary"
      @click="$emit('select', i)"
      >
      <span class="font-medium">{{ choiceLabel(i) }}.</span>
      <span class="ml-2">{{ opt }}</span>
    </button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({ q: { type: Object, required: true } })
  const choiceLabel = (i) => ['A','B','C','D'][i] || ''
</script>