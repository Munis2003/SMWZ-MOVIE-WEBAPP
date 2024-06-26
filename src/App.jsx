import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail';
import Navbar from './components/Navbar'
import Container from './pages/Container'
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import { MovieProvider } from "./Contextpage";
import 'react-toastify/dist/ReactToastify.css';
import Player from './pages/Player';

function App() {
  return (
    <>
<MovieProvider>
<div className='flex bg-[#0a1016]'>
<Navbar/>
<div id='main' className="w-[80%] absolute left-[20%] bg-[#0a1016]">
  <Routes>
    <Route path='/' element={<Container />} />
    <Route path='/trending' element={<Trending />} />
    <Route path='/upcoming' element={<Upcoming />} />
    <Route path='/moviedetail/:id' element={<Detail />} />
    <Route path="/player/:id/:title" element={<Player />} /> 
    <Route path="/player/:id" element={<Player />} /> 
    <Route path="/search/:query" element={<Container/>}/>
    <Route path="/search/" element={<Container/>}/>
  </Routes>
  </div>
</div>
</MovieProvider>
    </>
  )
}

export default App


