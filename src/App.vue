<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Registro</router-link>
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
    --primary-color: #9ccf31;
    --secondary-color: #f7d708;
    --color-icons: #536df6;
    --complementary-color: #ff9e00;
    --contact-color: #ce0000;
    --font-family: 'Redressed', cursive;
}
</style>
