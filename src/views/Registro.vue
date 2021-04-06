<template>
  <main>
    <figure>
      <img src="" alt="">
    </figure>

    <section>
      <form v-if="activeSingUpForm">
        <label>Email</label>
        <input type="email" placeholder="Usuario...">

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña...">

        <input type="submit" value="login">
        <button ></button>
      </form>
    </section>

    <section>
      <form v-if="activeSingUpForm">
        <label>Nombre</label>
        <input type="text" placeholder="Nombre...">

        <label>Apellidos</label>
        <input type="text" placeholder="Apellidos">

        <label>Nacionalidad</label>
        <input type="text" placeholder="Nacionalidad...">

        <label>Email</label>
        <input type="email" placeholder="Email...">

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña...">

        <section>
          <p>Registrarte como...</p>
          <label for="peregrino">peregrino</label>
          <input type="radio" id="peregrino" name="tipoCuenta" value="peregrino" checked>
          <label for="hospedador">hospedador</label>
          <input type="radio" id="hospedador" name="tipoCuenta" value="hospedador">
        </section>
        
        <input type="submit" value="logup">
      </form>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data(){
    return{
      activeSingUpForm: false
    }
  }
}
</script>

<style>

</style>