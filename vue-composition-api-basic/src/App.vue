<script setup>
import { RouterLink, RouterView } from "vue-router";
import { provide, reactive } from "vue";

const user = reactive({
  name: "Narin",
  email: "NarinGmail",
});
const userData = provide("userData", user);
</script>

<template>
  <div class="user-info">
    <span>{{ user.name }}</span>
    @
    <span>{{ user.email }}</span>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>



<style scoped>
.user-info {
  position: absolute;
  right: 0;
  background: green;
  padding: 10px;
  border-radius: 5px;
  color: white;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
