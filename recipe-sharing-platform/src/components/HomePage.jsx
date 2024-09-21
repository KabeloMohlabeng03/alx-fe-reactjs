import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recipes.map((recipe) => (
    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>
      </div>
    </Link>
  ))}
</div>
  );
};

export default HomePage;
