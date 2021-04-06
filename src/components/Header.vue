<template>
  <header>
      <h3>Hola {{fulanito}}</h3>
      <img src="../assets/img/logo.jpg" alt="">
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
    header{
        padding: 3vh;
        width:100%;
        display: flex;
        justify-content:space-between;
    }
    header img{
        width: 9vw;
        height: 9vw;
    }
</style>