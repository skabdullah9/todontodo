<template>
  <div>
    <form
      class="flex justify-center text-gray-100 mt-5 mb-6 w-full"
      @submit.prevent="addNewTodo"
      action=""
    >
      <input
        class="bg-white bg-opacity-10 focus:outline-none focus:bg-opacity-20 text-xl md:text-3xl p-1 pl-3 w-full placeholder-opacity-50 placeholder-gray-600"
        type="text"
        v-model="newTodo"
        placeholder="add new todo here..."
      />
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-yellow-600 text-2xl p-3 text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addNewTodo() {
      if (this.newTodo == "" || this.newTodo == " ") return;
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
      
    },
  },
};
</script>

<style></style>
