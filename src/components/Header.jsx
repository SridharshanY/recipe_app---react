import React from "react";

const Header = ({
  query,
  setQuery,
  selectedMeal,
  setSelectedMeal,
  mealTypes,
  getData,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl text-white">Recipe App</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                required
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border-4 rounded-md focus:outline-none border-yellow-300 px-4 py-2 shadow-md focus:shadow-yellow-600"
              />
            </div>
            <div>
              <select
                required
                name="mealtype"
                id="meatType"
                value={selectedMeal}
                onChange={(e) => setSelectedMeal(e.target.value)}
                className="w-full border-4 rounded-md focus:outline-none border-yellow-300 px-4 py-2 shadow-md focus:shadow-yellow-600"
              >
                {mealTypes.map((mealType, index) => (
                  <option value={mealType} key={index}>
                    {mealType}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 border-4 bg-white border-yellow-300 hover:bg-yellow-300 hover:duration-150 hover:scale-110 rounded-md duration-150">Search for Recipes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
