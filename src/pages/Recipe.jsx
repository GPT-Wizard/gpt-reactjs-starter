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
    setRecipe(response);
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
        <div className="flex flex-col max-h-[80vh] w-full justify-center items-center bg-white py-8 px-6 rounded-lg shadow-custom">
          <div className="w-full overflow-y-auto">
            <p className="border-mist-gray pb-4 border-b-2 font-semibold text-4xl text-flamingo-pink">
              {recipe.name}
            </p>
            <p className="mt-4 mb-2 text-xl text-gray font-semibold">Ingredients: </p>
            <div className="flex flex-wrap w-full items-center border-mist-gray pb-4 border-b-2">
              {recipe.ingredients.map((ingredient, index) => (
                <p
                  key={index}
                  className="w-max my-2 mr-2 flex font-semibold text-sm items-center pr-4 rounded-full border-2 border-wave-blue text-wave-blue"
                >
                  <span className="p-[6px] w-8 h-8 font-semibold rounded-full text-center bg-wave-blue text-white mr-2">
                    {index + 1}
                  </span>
                  {ingredient}
                </p>
              ))}
            </div>
            <p className="mt-4 text-xl text-gray font-semibold">Steps: </p>
            <div className="w-full">
              {recipe.steps.map((step, index) => (
                <p key={index} className="text-xl font-semibold text-wave-blue my-2">
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
