<template>
  <section class="item">
    <div id="checkbox" @click="toggleCheckItem(todo)">
      <div v-if="!todo.completed" class="circle-svg svg-wrapper">
        <svgUnchecked />
      </div>
      <div v-if="todo.completed" class="check-circle-svg svg-wrapper">
        <svgChecked />
      </div>
    </div>
    <div id="item">
      <p>{{ todo.title }}</p>
    </div>
    <div class="trash-svg svg-wrapper" @click="removeItem(todo)">
      <svgTrash />
    </div>
  </section>
</template>

<script>
import SvgUmcheckedVue from "./SvgUnchecked.vue";
import SvgTrashVue from "./SvgTrash.vue";
import SvgCheckedVue from "./SvgChecked.vue";

export default {
  name: "CustomItem",
  data: function () {
    return { isChecked: false };
  },
  methods: {
    toggleCheckItem: function (todo) {
      this.$emit('toggleCheckItem', todo);
    }, 
    removeItem: function (todo) {
      this.$emit("remove", todo);
    },
  },
  props: {
    todo: Object
  },
  components: {
    svgChecked: SvgCheckedVue,
    svgTrash: SvgTrashVue,
    svgUnchecked: SvgUmcheckedVue,
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

.item:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 3px 3px 10px #d0ebff;
  transition: all 0.1s ease-in-out;
}

.item p {
  margin-bottom: 5px;
  padding-left: 9px;
}
</style>

