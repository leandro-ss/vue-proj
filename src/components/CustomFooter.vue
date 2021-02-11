<template>
  <footer>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <p>
      VueJS starter template checklist. Colors from
      <a target="__blank" href="https://yeun.github.io/open-color">Open Color</a
      >. Icons from
      <a target="__blank" href="https://feathericons.com">Feather Icons</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* custom-footer */
footer {
  padding: 3px;
  font-size: 16px;
  margin: 10px;
}

footer p {
  text-align: center;
  font-size: 18px;
}

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
