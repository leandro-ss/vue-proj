<template>
  <customHeader />
  <customMain />
  <customFooter />
</template>

<script>
import CustomFooterVue from "./CustomFooter.vue";
import CustomHeaderVue from "./CustomHeader.vue";
import CustomMainVue from "./CustomMain.vue";

export default {
  name: "HelloWorld",
  components: {
    customFooter: CustomFooterVue,
    customHeader: CustomHeaderVue,
    customMain: CustomMainVue,
  },
};
</script>

<style scoped>
</style>
