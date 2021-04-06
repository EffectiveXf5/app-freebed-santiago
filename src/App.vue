<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Registro</router-link> |
      <router-link to="/caminos">Caminos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  :root {
      --primary-color: #C1545A;
      --secondary-color: #F6F6F6;
      --color-icons: #C1545A;
      --complementary-color: #B8B5FF;
      --contact-color: #DFBFC0;
      --border-contact-color: #C1545A;
      --font-family: 'Redressed', cursive;
  }

</style>
