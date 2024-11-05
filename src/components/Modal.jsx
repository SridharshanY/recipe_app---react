import { useState } from "react";
import close from "../svg/close.svg";

const Modal = ({setRecipes}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen)
    setRecipes(null)
  }

  return (
    <div 
    className={`bg-red-600 border-8 border-black rounded-xl p-4 md:mx-0 mx-16 flex md:flex-row flex-col justify-center items-center gap-4 ${isOpen ? '': 'hidden'}`}>
      <div>
        <h1 className="text-3xl">
          Oops...No Recipes were found.Why don't you try another one
        </h1>
      </div>
      <div className="flex justify-center items-center w-10">
        <button className="w-ful hover:scale-110 active:scale-100 hover:duration-200 active:duration-100 duration-200" onClick={()=>handleClose()}>
          <img src={close} className="w-full" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
