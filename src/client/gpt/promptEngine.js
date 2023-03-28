const recipePrompt = (dish) => {
  const prompt = `You are one of the best chefs in the world. Your job is to give a recipe for the ${dish} in the JSON format
  {"recipe": "<recipe with ingredients and steps>"}`;

  return prompt;
};

export { recipePrompt };
