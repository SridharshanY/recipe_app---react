import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='login' element={<Login/>} />
          <Route path='' element={<PrivateRouter />}>
          <Route path='' element={<Home/>} />
          </Route>
          <Route path='about' element={<PrivateRouter/>}>
            <Route path='' element={<About/>} />
          </Route>
          <Route path='detail' element={<PrivateRouter/>}>
            <Route path='' element={<Detail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
