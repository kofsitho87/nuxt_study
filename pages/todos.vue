<template>
  <div>
    <!-- <link rel="stylesheet" href="/todo.css"> -->
    <section class="todoapp">
      <header>
        <h1>todos</h1>
        <input v-model="keyword" type="text" class="new-todo" placeholder="What needs to be done?" @keypress="addNewTodo">
      </header>

      <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all">
        <label for="toggle-all" />

        <ul class="todo-list">
          <li>
            <div class="view">
              <input type="checkbox" class="toggle">
              <label> todo item</label>
              <button class="destroy" />
            </div>
            <input type="text" class="edit">
          </li>
        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count">
          <strong>2</strong> items left
        </span>
        <ul class="filters">
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Completed</a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      keyword: '',
      text: 'hi2323'
    }
  },
  methods: {
    addNewTodo (e) {
      console.log(e)
    }
  }
}
</script>
