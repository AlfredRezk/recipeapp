import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {About, Home, Login, Details} from './pages'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
  <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/details" element={<PrivateRoute/>}>
        <Route path="" element={<Details/>}/>
      </Route>

    </Routes>
  </>
  )
}
