<template>
  <div >
    <div class="todo-wrapper flex justify-center">
      <div  class="todo-item cursor-pointer flex justify-between items-center my-1 bg-white bg-opacity-10 hover:bg-opacity-20 w-full"  @click="toggleTodoStatus(todo)" >
        <div  class=" text-lg md:text-xl p-2 px-3 flex flex-col md:flex-row md:items-center justify-between w-full" >
          <p :class="{'line-through text-yellow-500': todo.completed}">{{ todo.title }} </p>
          <p class="text-gray-500 text-sm my-1 md:my-0">{{todo.date}}</p> 
        </div>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-black p-3 md:p-4 m-2 md:m-0" @click="deleteTodo(todo)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import "animate.css";

export default {
  name: "Todo",
  props: ["todo"],
  date() {
    return {
      showTime: false
    }
  },
  methods: {
    ...mapActions({
       deleteTodo: 'deleteTodo',
       toggleTodoStatus: 'toggleTodoStatus'
    }),
   //  deleteTodo() {
   //    return this.$store.dispatch("deleteTodo", this.todo);
   //  },
   //  toggleTodoStatus() {
   //     return this.$store.dispatch('toggleTodoStatus', this.todo)
   //  }
   
  },
};
</script>

<style></style>
