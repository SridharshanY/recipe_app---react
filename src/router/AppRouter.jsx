import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Detail from '../pages/Detail'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='login' element={<Login/>} />
          <Route path='detail' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
