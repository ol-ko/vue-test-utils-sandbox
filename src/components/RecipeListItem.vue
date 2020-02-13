<template>
  <div>
    <router-link :to="{ name: 'cocktail', params: { id: recipe.id } }">
      <img v-if="recipe.imageUrl" :src="recipe.imageUrl" :alt="recipe.title" />
      <h1>{{ recipe.title || recipe.id }}</h1>
    </router-link>
    <p v-if="recipe.description">{{ recipe.description }}</p>
    <button @click="$emit('recipeClick', recipe.id)">{{ actionButtonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
      validator(value) {
        if (!value.id) {
          return false;
        }
        return true;
      }
    },
    actionButtonText: String
  }
};
</script>
