import { useState } from 'react';

function DishForm({ submit }) {
  const [dish, setDish] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(dish);
  };

  return (
    <form
      className="flex flex-col justify-center items-center bg-white py-8 px-4 rounded-lg shadow-custom"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between">
        <p className="text-2xl px-4 mb-6 text-wave-blue font-semibold">
          Recipe builder: Turn your cravings into reality
        </p>
      </div>
      <div className="flex flex-wrap w-[90%]">
        <label className="w-full" htmlFor="topic">
          Dish name :
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 my-2 border-2 border-mist-gray rounded-lg bg-mist-gray bg-opacity-20 text-xl focus:outline-none focus:border-wave-blue"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          required
          placeholder="Enter a dish"
        />
      </div>
      <button
        className="w-40 h-10 hover:bg-opacity-80 bg-wave-blue mt-6 disabled:bg-slate-400 text-white rounded-lg flex justify-center items-center gap-x-4"
        type="submit"
      >
        Get cooking!
      </button>
    </form>
  );
}

export default DishForm;
