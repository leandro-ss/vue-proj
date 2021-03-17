<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "CustomHeader",
  props: {
    title: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  padding: 8px;
  font-size: 64px;
}
</style>
