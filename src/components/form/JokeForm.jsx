import { useState } from 'react';

function JokeForm({ submit }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(topic);
  };

  return (
    <form
      className="flex flex-col justify-center items-center bg-white py-8 px-4 rounded-lg shadow-custom"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between">
        <p className="text-2xl px-4 mb-6 text-wave-blue font-semibold">Jokes on Tap: Find Humor on Any Topic</p>
      </div>
      <div className="flex flex-wrap w-[90%]">
        <label className="w-full" htmlFor="topic">
          Topic :
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 my-2 border-2 border-mist-gray rounded-lg bg-mist-gray bg-opacity-20 text-xl focus:outline-none focus:border-wave-blue"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          placeholder="Enter a topic and let's get joking!"
        />
      </div>
      <button
        className="w-40 h-10 hover:bg-opacity-80 bg-wave-blue mt-6 disabled:bg-slate-400 text-white rounded-lg flex justify-center items-center gap-x-4"
        type="submit"
      >
        Press for Joke
      </button>
    </form>
  );
}

export default JokeForm;
