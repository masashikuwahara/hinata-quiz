<template>
  <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
    <div class="h-full bg-[color:var(--primary)] transition-all" :style="{ width: value + '%' }"></div>
  </div>
</template>
<script setup>
  defineProps({ value: { type: Number, default: 0 } })
</script>