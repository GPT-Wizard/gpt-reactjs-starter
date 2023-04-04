const recipePrompt = (dish) => {
  const prompt = `You are one of the best chefs in the world. Your job is to give a recipe for the ${dish} in the JSON format
  {"name": "<name of the recipe>","ingredients": ["<ingredient for recipe>"],"steps": ["<step for preparation with number>"]}`;

  return prompt;
};

export { recipePrompt };
