import { useState } from 'react';
import gptResponseBuilder from '../client/gpt';
import DishForm from '../components/form';
import Loader from '../components/loader';

function Recipe() {
  const [recipe, setRecipe] = useState();
  const [isLoading, setLoading] = useState();

  const handleSubmit = async (recipe) => {
    setLoading(true);
    const response = await gptResponseBuilder('RECIPE', recipe);
    setRecipe(response.recipe);
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex flex-col md:flex-row h-screen items-center justify-center gap-8 p-4">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row h-screen items-center justify-center gap-8 p-4">
      {!isLoading && !recipe ? (
        <div>
          <DishForm submit={handleSubmit} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-white py-8 px-4 rounded-lg shadow-custom">
          <p className="font-semibold p-4 text-2xl text-wave-blue">{recipe}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
