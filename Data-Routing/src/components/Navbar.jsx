import React from 'react'
import {NavLink, useNavigate} from 'react-router'

const Navbar = () => {

 const navigate = useNavigate()
  return (
    <div className='w-full p-5 h-20 flex justify-between bg-gray-300'>
        <h1>Heloo ❤️</h1>
      <div className='flex gap-5 items-center'>
        <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/service">Service</NavLink>

      <button onClick={()=>navigate('/auth/login')} className='py-2 px-6 bg-blue-500 rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
