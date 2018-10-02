<template>
  <div class="hello">
    <div class="left">
      <h1> {{ title }} </h1>
      <form @submit.prevent="addTask">
        <input class="task-input" type="text" placeholder="Add a Task" v-model="newTask" />
      </form>
      <ul>
        <li v-for="task in tasks" v-bind:key="task.id" :class="{complete: task.complete}">
          {{ task.desc }}
          <button v-on:click="removeTasks(task.id)" class="rm"> Delete </button>
          <button v-on:click="toggleTask(task)" class="done"> Done </button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTask: ''
    }
  },
  components: {
    Stats
  },
  computed: {
    ...mapState([
      'title',
      'tasks'
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_TASK',
      'TOGGLE_COMPLETE'
    ]),
    ...mapActions([
      'removeTask',
    ]),
    addTask: function() {
      this.ADD_TASK(this.newTask)
      this.newTask = ''
    },
    removeTasks: function(task) {
      this.removeTask(task)
    },
    toggleTask: function(task) {
      this.TOGGLE_COMPLETE(task)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .done {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: rgb(202, 240, 145);
    border: none;
    padding: 5px;
    color: green;
    cursor:pointer;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

  .complete {
      text-decoration: line-through;
      color: #555;
  }

</style>
