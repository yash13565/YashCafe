import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Screens/Home/Home'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/menu' element={<Home/>}/>
        <Route path='/contact' element={<Home/>}/>
    </Routes>
  )
}

export default Routing