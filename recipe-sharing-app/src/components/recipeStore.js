// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Add a favorites array to store favorite recipes
  recommendations: [], // Add a recommendations array to store recommended recipes
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
    )
  })),
  // Function to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, state.recipes.find(recipe => recipe.id === recipeId)]
  })),
  // Function to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(recipe => recipe.id !== recipeId)
  })),
  // Function to set recommended recipes
  setRecommendations: (recommendedRecipes) => set({ recommendations: recommendedRecipes }),
}));

export default useRecipeStore;
