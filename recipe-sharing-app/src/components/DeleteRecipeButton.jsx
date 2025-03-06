// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import useRecipeStore from '../stores/recipeStore'; // Ensure useRecipeStore is imported

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Ensure useNavigate is used

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate back to the home page after deletion
  };

  return (
    <button onClick={handleDelete}> {/* Ensure button element is present */}
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
