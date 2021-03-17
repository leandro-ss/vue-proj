<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span/>&nbsp;
    <router-link to="/timeline">Timeline</router-link>
    <span/>&nbsp;
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: #f8f9fa;
}

* {
  margin: 0;
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  color: #343a40;
  user-select: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", sans-serif;
  color: #343a40;
}

[v-cloak] {
  display: none;
}

/* cursor pointer when hovering over SVG */
.svg-wrapper {
  cursor: pointer;
}

/* svg changes size on hover and click */
.svg-wrapper:hover svg {
  transform: scale(1.05, 1.05);
  transition: transform 0.2s ease-in-out;
}

.svg-wrapper:active svg {
  transform: scale(0.95, 0.95);
  transition: transform 0.1s ease-in-out;
}

/* svg color, changes on hover of element with class `.item` */
.item svg {
  stroke: #adb5bd;
  transition: stroke 0.1s ease-in-out;
}

.item:hover svg {
  stroke: #495057;
  transition: stroke 0.1s ease-in-out;
}

/* svg trashcan color changes on hover of trashcan */
.item .trash-svg:hover svg {
  stroke: #f03e3e;
  transition: stroke 0.2s ease-in-out;
}

/* svg checkbox color green */
.item .circle-svg svg {
  stroke: #69db7c;
  transition: stroke 0.2s ease-in-out;
}

.item .check-circle-svg svg {
  stroke: #37b24d;
  transition: stroke 0.2s ease-in-out;
}

.trash-svg,
.plus-circle-svg {
  margin-left: auto;
  padding: 0 10px;
}
</style>
