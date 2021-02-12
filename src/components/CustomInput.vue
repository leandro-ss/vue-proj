<template>
  <div class="item">
    <p>Add item</p>
    <input type="text" v-model="userInput" @keydown.enter="addTodoItem" />
    <div class="plus-circle-svg svg-wrapper" @click="addTodoItem">
      <svgCircle />
    </div>
  </div>
</template>

<script>
import SvgCircleVue from "./SvgCircle.vue";

export default {
  name: "CustomInput",
  data: function () {
    return { userInput: "" };
  },
  methods: {
    addTodoItem: function () {
      if (this.userInput !== "") {
        this.$emit("to-add", this.userInput);
        this.userInput = "";
      }
    },
  },
  components: {
    svgCircle: SvgCircleVue,
  },
  props: {
    todos: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"] {
  padding: 5px;
  margin: 0 10px;
  border: 2px solid #ced4da;
  border-radius: 4px;
}

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

