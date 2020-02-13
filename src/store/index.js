import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  error: undefined,
  isLoading: false,
  allRecipes: [],
  currentRecipe: undefined,
  favouriteRecipes: [],
  currency: 'CHF',
  locale: 'en-us'
};

const getters = {
  getRecipeById: state => id => state.allRecipes.find(item => item.id === id)
};

const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setAllRecipes(state, recipes) {
    state.allRecipes = recipes;
  },
  setCurrentRecipe(state, recipe) {
    state.currentRecipe = recipe;
  },
  setError(state, recipes) {
    state.error = recipes;
  },
  addToFavourites(state, id) {
    if (!state.favouriteRecipes.some(item => item.id === id)) {
      state.favouriteRecipes.push(state.allRecipes.find(item => item.id === id));
    }
  },
  removeFromFavourites(state, id) {
    Vue.delete(state.favouriteRecipes, state.favouriteRecipes.findIndex(item => item.id === id));
  }
};

const actions = {
  async fetchAllRecipes(context) {
    let response;
    try {
      context.commit('setIsLoading', true);
      response = await axios.get('https://anca22974l.execute-api.eu-central-1.amazonaws.com/dev/cocktails');
      context.commit('setAllRecipes', response.data);
    } catch (error) {
      context.commit('setError', error);
    }
    context.commit('setIsLoading', false);
  },
  async fetchCocktailRecipeById(context, id) {
    let response;
    try {
      context.commit('setCurrentRecipe', undefined);
      context.commit('setIsLoading', true);
      response = await axios.get(`https://anca22974l.execute-api.eu-central-1.amazonaws.com/dev/cocktails/${id}`);
      context.commit('setCurrentRecipe', response.data);
    } catch (error) {
      context.commit('setError', error);
    }
    context.commit('setIsLoading', false);
  }
};

export default new Vuex.Store({ state, getters, mutations, actions });
