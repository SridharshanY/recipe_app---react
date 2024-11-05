import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import home from "../assets/home.svg"
import Modal from "../components/Modal";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [recipes, setRecipes] = useState(null);

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "TeaTime"]

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
      console.log(recipes)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      {!recipes && <img className="w-64" src={home} alt="" />}
      {recipes?.length===0 && <Modal setRecipes={setRecipes} />}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
