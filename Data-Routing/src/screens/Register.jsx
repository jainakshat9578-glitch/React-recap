import React from 'react'
import { useParams } from 'react-router'

const Register = () => {
    const {id} = useParams()
  return (
    <div className='text-2xl absolute top-1/2 left-1/2  '>
      Regoister - {id}
    </div>
  )
}

export default Register
