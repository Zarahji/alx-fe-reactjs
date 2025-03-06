// src/components/RecommendationsList.jsx
import React from 'react';
import useRecipeStore from '../stores/recipeStore'; // Ensure useRecipeStore is imported

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations); // Use useRecipeStore to get recommendations

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => ( // Use map to display recommended recipes
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommended recipes at the moment.</p>
      )}
    </div>
  );
};

export default RecommendationsList; // Ensure this line is present
