import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className='h-30 w-full bg-gray-300 flex mt-150 text-6xl justify-center items-center'>
        Footer
      </div>
    </div>
  )
}

export default MainLayout
