import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailPortofolio from './pages/DetailPortofolio'
import React from 'react'
import PagesNotFound from './pages/PagesNotFound'
import Experience from './components/Experience'
function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    < Route path='/portofolio/:id' element={<DetailPortofolio/>}/>
   <Route path='/pages-not-found' element={<PagesNotFound/>}/>
   <Route path='*' element={<PagesNotFound/>}/>
   <Route path='/experience'element={<Experience/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
