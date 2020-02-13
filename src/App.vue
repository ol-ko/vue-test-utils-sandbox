<template>
  <div id="app">
    <section v-if="error" class="info">
      Oops, something went wrong.
    </section>
    <nav>
      <router-link to="/">Cocktail book</router-link>
      <router-link to="/favourites">Favourites ({{ favouritesNum }})</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    error() {
      return this.$store.state.error;
    },
    favouritesNum() {
      return this.$store.state.favouriteRecipes.length;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 40px;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

.recipeList {
  padding: 0;
  margin: 0 -5px;
  list-style-type: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.recipeList li {
  display: block;
  flex: 0 1 12.5%;
  padding: 5px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover,
a:active {
  text-decoration: underline;
}

.info {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 40px;
  font-weight: bold;
}

nav {
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}

nav a {
  margin: 20px;
}
</style>
