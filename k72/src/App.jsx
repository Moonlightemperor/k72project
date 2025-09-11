import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/agence' element={<Agence/>}/>
   </Routes>
  )
}

export default App
