import React from 'react'
import {Routes,Route, Link} from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Mobile from './pages/Mobile'
import Laptop from './pages/Laptop'

const App = () => {
  return (
    <div >
      <div className='flex items-center justify-center gap-20 mt-10'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />}>
          <Route path='mobile' element={<Mobile />} />
          <Route path='laptop' element={<Laptop />} />
        </Route>
        <Route path='*' element={<h1 className='flex items-center justify-center mt-80 text-red-500'>404 | Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
