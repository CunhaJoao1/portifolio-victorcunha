import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Sobre } from './Components/Sobre/Sobre';

function App() {

  return (
    <div>
      <Header/>
        <BrowserRouter>
          <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='/sobre' element={<Sobre/>}/> 

          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
