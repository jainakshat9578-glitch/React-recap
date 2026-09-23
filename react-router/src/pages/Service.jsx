import React from 'react'
import { Link, Outlet } from 'react-router'

const Service = () => {
  //outlet->agr uss url ka name jo aapne define kiya hai route me same milta hai toh UI me dikha dega nhi toh nhi dikhayega!
  return (
    <div>
      <div className='flex justify-center mt-20 gap-30'>
      <Link to="/service/mobile">Mobile</Link>
      <Link to="/service/laptop">Laptop</Link>
    </div>
    <Outlet />
    </div>
  )
}

export default Service
