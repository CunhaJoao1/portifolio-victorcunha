import { useState } from 'react'
import './App.css'
import {HeaderNavigation} from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Sobre } from './Components/Sobre/Sobre';
import { Projetos } from './Components/Projetos/Projetos';

function App() {

  return (
    <div>
          <BrowserRouter>
            <HeaderNavigation/> 
            <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/home' element={<Home/>}/> 
              <Route path='/sobre' element={<Sobre/>}/> 
              <Route path='/projetos' element={<Projetos/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
