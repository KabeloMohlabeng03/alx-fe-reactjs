import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);


  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-white font-bold text-xl">
            Recipe Sharing Platform
          </Link>
          <Link to="/add-recipe" className="text-white">
            Add New Recipe
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm addRecipe={addRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
