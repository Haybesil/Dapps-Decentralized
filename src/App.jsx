import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Coins from './components/coins/Coins'
import Home from './components/pages/home/Home';


const App = () => {
  return (
    <div>
     <BrowserRouter>
         <Routes>
           <Route path='/' exact element = {<Home/>}/>
           <Route path='/wallet' element = {<Coins/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

