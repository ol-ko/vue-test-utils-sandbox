<template>
  <div>
    <section v-if="recipes.length > 0">
      <h1>All recipes</h1>
      <ul class="recipeList">
        <li v-for="recipe in recipes">
          <RecipeListItem
            :recipe="recipe"
            actionButtonText="Add to favourites"
            @recipeClick="addToFavourites"
          ></RecipeListItem>
        </li>
      </ul>
    </section>
    <section v-else>
      No recipes found
    </section>
  </div>
</template>

<script>
import RecipeListItem from '@/components/RecipeListItem.vue';

export default {
  name: 'Home',
  components: { RecipeListItem },
  computed: {
    recipes() {
      return this.$store.state.allRecipes;
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllRecipes');
  },
  methods: {
    addToFavourites(recipeId) {
      this.$store.commit('addToFavourites', recipeId);
    }
  }
};
</script>
