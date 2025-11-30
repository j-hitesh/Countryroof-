import { Route, Routes } from "react-router";
import Home from './Pages/Home';
import News from './Pages/News';
import Post from './Pages/Post';
import Shops from './Pages/Shops';
import Office from "./Pages/office";
import Floors from './Pages/Floors';
import Header from "./Component/Header";
import Foter from "./Component/Foter";


const App = () => {
  return (
    <div>
         <Header/>
         <Routes>
            <Route path='/'element = {<Home/>}></Route>
            <Route path='News' element ={<News/>} ></Route>
            <Route path = 'Post' element = {<Post/>} ></Route>
             <Route path = 'Office' element = {<Office/>} ></Route>
              <Route path = 'Shops' element = {<Shops/>} ></Route>
              <Route path = 'Floors' element = {<Floors/>} ></Route>
          </Routes>
          <Foter/>
    </div>
  )
}

export default App
