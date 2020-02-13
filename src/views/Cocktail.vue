<template>
  <div>
    <div v-if="cocktail">
      <h1>
        {{ cocktail.title }}
      </h1>
      <img :src="cocktail.imageUrl" :class="$style.image" />
      <p>{{ cocktail.description }}</p>
      <p :class="$style.source">— {{ cocktail.source }}</p>

      <h3>Recipe</h3>
      <ul>
        <li v-for="ingredient in cocktail.ingredients" :class="$style.ingredient">
          {{ ingredient.quantity }} {{ ingredient.title }}
        </li>
      </ul>
      <p v-html="cocktail.method"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cocktail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    cocktail() {
      return this.$store.state.currentRecipe;
    }
  },
  mounted() {
    this.$store.dispatch('fetchCocktailRecipeById', this.id);
  }
};
</script>

<style module>
.image {
  max-width: 100%;
}

@media (min-width: 300px) {
  .image {
    max-width: 300px;
  }
}

.source {
  font-style: italic;
}
</style>
