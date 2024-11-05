import React from 'react'

const Card = ({recipes}) => {
  console.log(recipes)
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8'>
      {recipes.map(({recipe}, index)=>{
        return(
          <div key={index}>
            <h1>{recipe.label}</h1>
            <img src={recipe.image} alt="" className='w-80'/>
          </div>
        )
      })}
    </div>
  )
}

export default Card
