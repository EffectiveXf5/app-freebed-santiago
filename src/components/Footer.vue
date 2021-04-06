<template>
  <footer>
      <ul>
        <li>
          <i class="fas fa-user"></i>
        </li>

        <li>
          <i class="fas fa-bed"></i>
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

    footer ul li i {
      color: var(--color-icons);
    }

</style>