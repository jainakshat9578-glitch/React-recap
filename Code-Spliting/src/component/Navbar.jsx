import { NavLink } from 'react-router'


const Navbar = () => {
  return (
    <div className='w-full flex justify-between bg-blue-500'>
      <h1>Logo</h1>
      <div className='flex justify-between gap-20 mt-8 '>
        <NavLink className={({isActive})=>isActive?"text-white font-bold": "text-white font-light"} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-bold": "text-white font-light"}  to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-bold": "text-white font-light"}  to="/products">Product</NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-bold": "text-white font-light"}  to="/users">Users </NavLink>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar