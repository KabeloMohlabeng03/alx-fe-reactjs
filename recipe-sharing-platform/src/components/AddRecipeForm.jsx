import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = ({ addRecipe }) => {
  const navigate = useNavigate();

  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  
  const [errors, setErrors] = useState({});

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = {};
    if (!title.trim()) validationErrors.title = 'Title is required.';
    if (!summary.trim()) validationErrors.summary = 'Summary is required.';
    if (!ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      validationErrors.ingredients = 'Please provide at least two ingredients, separated by commas.';
    }
    if (!instructions.trim()) validationErrors.instructions = 'Instructions are required.';

    setErrors(validationErrors);

    
    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary,
        image: 'https://via.placeholder.com/600x400', // Placeholder image
        ingredients: ingredients.split(',').map((item) => item.trim()),
        instructions: instructions.split('\n').filter((step) => step.trim() !== ''),
      };

      addRecipe(newRecipe);

      
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">
            Summary
          </label>
          <textarea
            id="summary"
            className={`w-full px-3 py-2 border ${errors.summary ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter a brief summary of the recipe"
            rows="3"
          ></textarea>
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>

        
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            className={`w-full px-3 py-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., 200g spaghetti, 100g pancetta"
            rows="3"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (separated by new lines)
          </label>
          <textarea
            id="instructions"
            className={`w-full px-3 py-2 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter each step on a new line"
            rows="5"
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
