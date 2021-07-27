<template>
  <div class="container mx-auto font-mono max-w-screen-md p-2">
    <h1 class="text-center mt-8 text-3xl md:text-4xl">Todo<span class="text-yellow-400 mx-2">N</span>Todo</h1>
    <div class="todos-info flex justify-center my-3 text-gray-300">
      <p class="completed mx-2">completed: <span class="text-yellow-400">{{completedTodos}}</span></p>
      <p class="pending mx-2">pending: <span class="text-yellow-400">{{pendingTodos}}</span></p>
    </div>
    <TodoInput />
    <Todos />
    <div  v-if="$store.state.todos.length > 0" class="text-center flex justify-center" > <span @click="clearAll" class="text-gray-500 hover:text-yellow-500 mt-5 cursor-pointer inline-block border border-gray-500 hover:border-yellow-500 px-3 py-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Clear All</span></div>
  </div>

</template>
<script>
import { mapGetters } from 'vuex'
import Todos from '@/components/Todos.vue'
import TodoInput from '@/components/TodoInput.vue'

export default {
  components: {
    Todos,
    TodoInput
  },
 
  computed: {
     ...mapGetters({
    completedTodos: 'completedTodos',
    pendingTodos: 'pendingTodos'
  }),
    // completedTodos() {
    //   return this.$store.getters.completedTodos
    // },
    // pendingTodos() {
    //   return this.$store.getters.pendingTodos
    // }
    clearAll() {
       if(confirm('Are you sure?')) {
         return this.$store.dispatch('clearAll')
       }
       return false
    }
  }, 
  mounted() {
    let todos = []
    if(localStorage.todoItems) {
      todos = localStorage.todoItems
    }
    
    return this.$store.dispatch('showTodos', todos)
  }
}
</script>
<style>
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  background-color: black;
  color: white
}
html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

</style>
