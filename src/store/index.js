import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    NEW_TODO(state, newTodo) {
      let date = new Date()
      state.todos.push({
        title: newTodo,
        completed: false,
        date: date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ',' + date.getHours() + ':' + date.getMinutes() 
      })
     localStorage.todoItems = JSON.stringify(state.todos) 
    },
    DELETE_TODO(state, todo) {
      let index = state.todos.indexOf(todo)
      state.todos.splice(index, 1)
      localStorage.todoItems = JSON.stringify(state.todos) 
    },
    TOGGLE_TODO(state, todo) {
      todo.completed = !todo.completed
      localStorage.todoItems = JSON.stringify(state.todos) 
    },
    CLEAR_ALL(state) {
      state.todos.length = 0
      localStorage.todoItems = JSON.stringify(state.todos) 
    },
    SHOW_TODOS(state, todos) {
      state.todos = JSON.parse(todos) 
    }
  },
  actions: {
    addTodo({commit}, newTodo) {
      commit('NEW_TODO', newTodo)
    },
    deleteTodo({commit}, todo) {
      commit('DELETE_TODO', todo)
    },
    toggleTodoStatus({commit}, todo) {
      commit('TOGGLE_TODO', todo)
    },
    clearAll({commit}) {
      commit('CLEAR_ALL')
    },
    showTodos({commit}, todos) {
      commit('SHOW_TODOS',todos)
    }
  },
  getters: {
    completedTodos(state) {    
      return state.todos.filter(todo=> todo.completed === true).length
     
    },
    pendingTodos(state) {
      return state.todos.filter(todo => todo.completed === false).length
    }
  },
  modules: {
  }
})
