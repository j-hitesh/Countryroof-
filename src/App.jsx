import { Route, Routes } from "react-router";
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Property from './Pages/Property';
import News from './Pages/News';
import Post from './Pages/Post';
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
// import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
             <Routes>
            <Route path='/'element = {<Home/>}></Route>
            <Route path ='/Property' element ={<Property/>} ></Route>
            <Route path='News' element ={<News/>} ></Route>
            <Route path = 'Post' element = {<Post/>} ></Route>
            <Route path = 'Buy' element = {<Buy/>} ></Route>
            <Route path = 'Sell' element = {<Sell/>} ></Route>
          </Routes>
      
    </div>
  )
}

export default App
