<template>
  <main>
    <div id="list-items-wrapper">
      <customInput :todos="todos" @add="add"/>
      <customStats :todos="todos" />
      <customItem
        v-for="todo in todos"
        :key="todo"
        :todo="todo"
        @toggleCheckItem="toggleCheckItem"
        @remove="remove"
      />
    </div>
  </main>
</template>

<script>
import CustomItemVue from "./CustomItem.vue";
import CustomStatsVue from "./CustomStats.vue";
import CustomInputVue from "./CustomInput.vue";

export default {
  name: "CustomMain",
  data: function () {
    return {
      todos: [],
    };
  },
  created: function () {
    // Simple GET request using fetch
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => (this.todos = data));
  },
  methods: {
    remove(value) {
      this.todos = this.todos.filter(todo => todo !== value);
    },
    add(value) {
      this.todos.push({title:value});
    },
    toggleCheckItem(value) {
      value.completed = !value.completed;
    }
  },
  components: {
    customItem: CustomItemVue,
    customStats: CustomStatsVue,
    customInput: CustomInputVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100%;
}

#list-items-wrapper {
  width: 85vw;
  max-width: 600px;
  min-width: 250px;
}
</style>

