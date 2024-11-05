import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  // const [query, setQuery] = useState("")
  const [selectedMeal, setSelectedMeal] = useState("")

  const APP_ID = process.env.REACT_APP_API_ID
  const APP_KEY = process.env.REACT_APP_API_KEY
  const query = "pasta"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async() => {
    try {
      const {data} = await axios(url)
      alert(data)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>
      Home
    </div>
  )
}

export default Home
