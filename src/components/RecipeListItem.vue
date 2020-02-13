<template>
  <div>
    <router-link :to="{ name: 'cocktail', params: { id } }">
      <img :src="imageUrl" :alt="title" />
      <h1>{{ title }}</h1>
    </router-link>
    <p>{{ description }}</p>
    <button @click="$emit('recipeClick', id)">{{ actionButtonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: String,
    description: String,
    imageUrl: String,
    actionButtonText: String
  }
};
</script>
