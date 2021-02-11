<template>
  <div class="item">
    <p>Todos: {{ todos.length }}</p>
  </div>
</template>

<script>
export default {
  name: "CustomStats",
  props: {
    todos: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 12px 0 10px 10px;
  background-color: #e9ecef;
  box-shadow: 3px 3px 10px #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;
}
</style>

