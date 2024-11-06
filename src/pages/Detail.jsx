import defaultImage from "../assets/default-image.jpg";
import meal from "../assets/meal.svg";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  const { label, image } = state;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4 my-4 border-b-8 border-b-black">
        {label}
      </h1>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 mx-6">
        <div className="">
          <img
            src={image ? image : defaultImage}
            className="w-full rounded-xl"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xl font-semibold">NUTRIENTS</h4>
            <ul className="bg-yellow-400 w-60 border-4 border-yellow-500 rounded-xl">
              <li className="px-2 py-2 border-b-4 border-yellow-500">
                {state.totalNutrients.CA.label} :{" "}
                {Math.round(state.totalNutrients.CA.quantity)}
                {state.totalNutrients.CA.unit}
              </li>
              <li className="px-2 py-2 border-b-4 border-yellow-500">
                {state.totalNutrients.CHOCDF.label} :{" "}
                {Math.round(state.totalNutrients.CHOCDF.quantity)}
                {state.totalNutrients.CHOCDF.unit}
              </li>
              <li className="px-2 py-2 border-b-4 border-yellow-500">
                {state.totalNutrients.CHOLE.label} :{" "}
                {Math.round(state.totalNutrients.CHOLE.quantity)}
                {state.totalNutrients.CHOLE.unit}
              </li>
              <li className="px-2 py-2 border-b-4 border-yellow-500">
                {state.totalNutrients.ENERC_KCAL.label} :{" "}
                {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
                {state.totalNutrients.ENERC_KCAL.unit}
              </li>
              <li className="px-2 py-2 border-b-4 border-yellow-500">{state.totalWeight}</li>
              <li className="px-2 py-2 border-b-4 border-yellow-500">Calories: {Math.round(state.calories)}</li>
              {state.digest.slice(0, 4).map((item, index) => (
                <li className="px-2 py-2 border-b-4 border-yellow-500" key={index}>
                  {item.label} : {Math.round(item.total)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">INGREDIENTS</h4>
            <ul className="bg-yellow-400 w-60 border-4 border-yellow-500 rounded-xl">
              {state.ingredientLines.map((ingredient, index) => {
                return <li key={index} className="px-2 py-2 border-b-4 border-yellow-500">{ingredient}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
