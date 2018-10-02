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
  /* About Getters
      - getters are like computed properties for stores
      - a getters result is cached based on its dependencies and will only re-evaluate when dependencies change
      - first argument should be: state
      - second argument optional, should be: getters
          - this will give you access to all other getters in the store
  */
  getters: {
    countTasks: state => {
      return state.tasks.length
    }
  },
  /* About Mutations
      - the only way to change state in a Vuex store
      - similar to events: each mutation has
          - string type
          - handler
              - a function that modifies state
              - first argument: state
              - second argument: payload
      - dont mutate state object directly, use the spread operator or Vue.set(obj, 'newProp', 123)
      - to invoke a mutation in a component, use: commit with its type
      - mutations must by synchronous
  */
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
  /* About Actions
      - actions don't mutate the state, they commit mutations
      - can contain asychronous operations
      - context object exposes the same methods/properties on the store instance
          - context.commit: used to commit a mutation, with type and optional payload
          - context.state: used to access state
          - context.getters: used to access getters
      - using dispatch, promises, and async await: https://vuex.vuejs.org/guide/actions.html
  */
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
