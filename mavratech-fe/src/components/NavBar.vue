<template>
  <nav>
    <div class="navbar-item">       
      <router-link to="/category">
        <h1>Domov</h1>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/about">
        <h1>O nás</h1>
      </router-link>
    </div>
    <NavBarService :services="services" />
    <div class="navbar-item">
      <router-link to="/contact">
        <h1>Kontakt</h1>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { services } from "../mock-data";
import NavBarService from "./NavBarService.vue"
  export default {
      name: "NavBar",
      components: {
        NavBarService
      },
      data() {
        return {
          services,
        };
      },
  }
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%);

  }
  nav .navbar-item {
    color: #444;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
  }
  nav .navbar-item.active,
  nav .navbar-item:hover {
    border-bottom-color: #444;
  }
  nav .navbar-item a {
    color: inherit;
    text-decoration: none;
  }
</style>