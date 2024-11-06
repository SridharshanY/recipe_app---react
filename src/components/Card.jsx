import { useNavigate } from 'react-router-dom';
import defaultImage from '../assets/default-image.jpg'

const Card = ({ recipes }) => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-6">
      {recipes.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 p-6 rounded-lg border-4 border-yellow-300 shadow-lg duration-150 hover:scale-110 bg-gradient-to-tr from-white via-yellow-100 to-orange-300 hover:bg-gradient-to-br hover:from-white hover:via-yellow-100 hover:to-orange-300"
          >
            <h1 className="text-xl font-semibold max-w-80">{label}</h1>
            <img src={image ? image: defaultImage} alt="" className="w-80" />
            <div>
              <button className="px-4 py-2 bg-white border-4 border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-semibold duration-200 hover:cursor-pointer" onClick={()=>navigate('detail', {state:recipe})}>
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
