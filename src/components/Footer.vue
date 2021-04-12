<template>
  <footer>
      <ul>
        <li>
          <router-link to="/"><i class="fas fa-user"></i></router-link>
        </li>

        <li>
          <router-link to="/caminos"><i class="fas fa-bed"></i></router-link>
        </li>
          
        <li>
          <i class="fas fa-comment-alt"></i>
        </li>

        <li>
          <i class="fas fa-map-marker-alt"></i>  
        </li>
      </ul>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

    footer {
      background-color: var(--secondary-color);
      position: fixed;
      bottom: 0;
      width: 100%;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px -5px 30px 0px rgba(0, 0, 0, .25);
    }

    footer ul {
      padding: 1.5vh;
      display: flex;
      justify-content: space-between;
    }

    footer ul li i {
      color: var(--color-icons);
      font-size: 1.5rem;
    }

</style>