<template>
  <div>
    <h1>Favourites</h1>
    <section v-if="recipes.length > 0">
      <ul class="recipeList">
        <li v-for="recipe in recipes">
          <RecipeListItem
            :title="recipe.title"
            :description="recipe.description"
            :imageUrl="recipe.imageUrl"
            :id="recipe.id"
            actionButtonText="Remove from favourites"
            @recipeClick="removeFromFavourites"
          ></RecipeListItem>
        </li>
      </ul>
    </section>
    <section v-else>
      <p>No favourites yet</p>
    </section>
  </div>
</template>

<script>
import RecipeListItem from '@/components/RecipeListItem.vue';

export default {
  name: 'Favourites',
  components: { RecipeListItem },
  computed: {
    recipes() {
      return this.$store.state.favouriteRecipes;
    }
  },
  methods: {
    removeFromFavourites(recipeId) {
      this.$store.commit('removeFromFavourites', recipeId);
    }
  }
};
</script>
