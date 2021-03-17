<template>
  <div class="home">
    <customHeader title="VueJS Timeline" />
    <customMain />
    <customFooter />
  </div>
</template>

<script>
import CustomFooterVue from "../../components/CustomFooter.vue";
import CustomHeaderVue from "../../components/CustomHeader.vue";
import CustomMainVue from "../../components/CustomMain.vue";

export default {
  name: "Home",
  components: {
    customFooter: CustomFooterVue,
    customHeader: CustomHeaderVue,
    customMain: CustomMainVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
