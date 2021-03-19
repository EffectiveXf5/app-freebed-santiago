<template>
  <footer>
      <ul>
        <li>
          <img src="../assets/icons/profile-user.svg" alt="Icono de usuario para login">
        </li>

        <li>
          <img src="../assets/icons/bed.svg" alt="Icono de una cama">
        </li>
          
        <li>
          <img src="../assets/icons/chat.svg" alt="Icono de mensajes para chat">
        </li>

        <li>
          <img src="../assets/icons/location-pin.svg" alt="Icono de localización">  
        </li>
      </ul>
  </footer>
</template>icons/

<script>
export default {
    name: "Footer"
}
</script>

<style>

    footer {
      background-color: var(--secondary-color);
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    footer ul {
      padding: 1.5vh;
      display: flex;
      justify-content: space-between;
    }

</style>