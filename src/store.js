import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Things I Have To Do:',
    tasks: [
      'learn vue',
      'make an app with vue',
      'make a task list'
    ]
  },
  getters: {
    countTasks: state => {
      return state.tasks.length
    }
  },
  mutations: {
    ADD_TASK: (state, task) => {
      state.tasks.push(task)
    },
    REMOVE_TASK: (state, task) => {
      state.tasks.splice(task, 1)
    },
    REMOVE_ALL: (state) => {
      state.tasks = [];
    }
  },
  actions: {   //good for async
    removeTask: (context, task) => {
      context.commit('REMOVE_TASK', task)
    },
    removeAll( {commit} ) {  // add error handling
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})
