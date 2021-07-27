<template>
  <div>
      <p v-if="fetchTodos.length === 0" class="text-gray-400 text-center mt-40">Your todos will appear here...</p>
    <transition-group enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__hinge">
      <Todo v-for="todo in fetchTodos" :key="todo" :todo="todo" />
    </transition-group>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import "animate.css";

export default {
  components: {
    Todo,
  },
  computed: {
    fetchTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
