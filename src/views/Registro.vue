<template>
  <main>
    <figure>
      <img src="../assets/img/logo.jpg" alt="">
    </figure>

    <section>
      <form v-if="!activeSingUpForm">
        <label>Email.</label>
        <input type="email" placeholder="Usuario">

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña">

        <input class="input-submit-singUp" type="submit" value="Acceder">
        <button class="btn-singUp" @click="activeSingUpForm = true">Registrarse</button>
      </form>
    </section>

    <section>
      <form v-if="activeSingUpForm">
        <label>Nombre</label>
        <input type="text" placeholder="Nombre">

        <label>Apellidos</label>
        <input type="text" placeholder="Apellidos">

        <label>Nacionalidad</label>
        <input type="text" placeholder="Nacionalidad">

        <label>Email</label>
        <input type="email" placeholder="Email">

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña">

        <label>Usuario o Administrador</label>
        <select id="user" name="user">
          <option value="USER">Peregrino</option>
          <option value="ADMIN">Hospedador</option>
        </select>
        
        <input class="input-submit-singIn" type="submit" value="Registrarse">
        <button class="btn-singIn" @click="activeSingUpForm = false">Volver a acceso</button>
      </form>
    </section>
    <Footer />
  </main>
</template>

<script scoped>
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

<style scoped>

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }

  main figure {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 5vh;
  }

  main figure img {
    width: 50vw;
    height: 25vh;
  }

  main section form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main section form label {
    display: none;
  }

  main section form input,
  main section form select {
    margin-top: 2vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    background-color: var(--input-color);
    border-radius: 5px;
  }

  main section form input:focus {
    outline: none;
  }

  .input-submit-singUp,
  .input-submit-singIn {
    padding: 0.5vh;
    width: 28vw;
    background-color: var(--color-button);
    border: 1px solid var(--primary-color);
  }

  .btn-singUp,
  .btn-singIn {
    margin-top: 3vh;
    padding: 1vh;
    background-color: var(--complementary-color);
  }

</style>