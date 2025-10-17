import { defineStore } from 'pinia'
import { questions as rawQuestions } from '../data/questions'


export const useQuizStore = defineStore('quiz', {
  state: () => ({
    version: '1.0.0-beta',
    changelog: [
      { date: '2025-10-18', text: 'ベータ版', version: '1.0.0-beta' }
    ],
    startedAt: null,
    finishedAt: null,
    index: 0,
    answers: [], // { questionId, selectedIndex, isCorrect }
    questions: shuffle(rawQuestions).slice(0, 10)
  }),
  getters: {
    current(state) { return state.questions[state.index] },
    progress(state) { return Math.round(((state.index) / state.questions.length) * 100) },
    score(state) { return state.answers.filter(a => a.isCorrect).length },
    percent() { return Math.round((this.score / this.questions.length) * 100) }
  },
  actions: {
    start() {
      this.startedAt = new Date()
      this.finishedAt = null
      this.index = 0
      this.answers = []
      this.questions = shuffle(rawQuestions).slice(0, 10)
    },
    select(optionIndex) {
      const q = this.current
      if (!q) return
      const isCorrect = q.correctIndex === optionIndex
      this.answers.push({ questionId: q.id, selectedIndex: optionIndex, isCorrect })
      if (this.index < this.questions.length - 1) {
      this.index++
    } else {
      this.finishedAt = new Date()
    }
  },
  reset() { this.start() }
}
})

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}