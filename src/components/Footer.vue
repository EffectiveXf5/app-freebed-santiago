<template>
  <footer>
      <ul>
          <li>
            <img src="../assets/profile-user.svg" alt="Icono de usuario para login">
          </li>

          <li>
            <img src="../assets/bed.svg" alt="Icono de una cama">
          </li>
          
          <li>
            <img src="../assets/chat.svg" alt="Icono de mensajes para chat">
          </li>

          <li>
            <img src="../assets/location-pin.svg" alt="Icono de localización">  
          </li>
      </ul>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

    footer{
        background-color: var(--secondary-color);
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    footer ul{
        padding: 1.5vh;
        display: flex;
        justify-content: space-between;
    }

</style>