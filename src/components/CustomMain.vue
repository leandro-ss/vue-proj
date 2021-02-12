<template>
  <main>
    <div id="list-items-wrapper">
      <customInput :todos="todos" @add="add" />
      <customStats :todos="todos" />
      <customItem
        v-for="todo in todos"
        :key="todo"
        :todo="todo"
        :todos="todos"
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
      todos: ["Alfa", "Bravo", "Charlie", "Delta", "Echo"],
    };
  },
  methods: {
    remove(value) {
      let trashedItemIndex = this.todos.indexOf(value);
      this.todos.splice(trashedItemIndex, 1);
    },
    add(value) {
      this.todos.push(value);
    },
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

