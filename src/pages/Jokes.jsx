import { useState } from 'react';
import gptResponseBuilder from '../client/gpt';
import JokeForm from '../components/form/JokeForm';
import Loader from '../components/loader';

function Jokes() {
  const [joke, setJoke] = useState();
  const [isLoading, setLoading] = useState();

  const handleSubmit = async (topic) => {
    setLoading(true);
    const response = await gptResponseBuilder('JOKE', topic);
    setJoke(response.joke);
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
      {!isLoading && !joke ? (
        <div>
          <JokeForm submit={handleSubmit} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-white py-8 px-4 rounded-lg shadow-custom">
          <p className="font-semibold p-4 text-2xl text-wave-blue">{joke}</p>
        </div>
      )}
    </div>
  );
}

export default Jokes;
