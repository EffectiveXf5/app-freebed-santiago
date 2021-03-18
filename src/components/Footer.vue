<template>
  <footer>
      <ul>
          <li>
              <img src="../assets/profile-user.svg" alt="">
          </li>
          <li>
              <img src="../assets/bed.svg" alt="">
          </li>
          <li>
              <img src="../assets/chat.svg" alt="">
          </li>
          <li>
              <img src="../assets/location-pin.svg" alt="">  
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