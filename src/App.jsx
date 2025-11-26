import { Route, Routes } from "react-router";
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Post from './Pages/Post';
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Projects from "./Pages/Projects";  
import Banner from "./Component/Banner"
import Commercial from "./Pages/Commercial";
// import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
       <Banner/>
             <Routes>
            <Route path='/'element = {<Home/>}></Route>
            <Route path ='/Commercial' element ={<Commercial/>} ></Route>
            <Route path='News' element ={<News/>} ></Route>
            <Route path = 'Post' element = {<Post/>} ></Route>
             <Route path = 'Buy' element = {<Buy/>} ></Route>
              <Route path = 'Sell' element = {<Sell/>} ></Route>
               <Route path = 'Projects' element = {<Projects/>} ></Route>
                {/* <Route path = 'Post' element = {<Post/>} ></Route> */}
          </Routes>
      
    </div>
  )
}

export default App
