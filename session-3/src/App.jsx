import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState(" ")
  const [age, setage] = useState(null)

  const [formData, setformData] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault(); // form pe jo bhi event chal rhe hai unko off kr deta hai!
    const newarr = [...formData]
    newarr.push({ //push-> array ke last me ek object insert krdega
      name,age
    })
    setformData(newarr)


  }

  return (
    <div w-full h-screen flex items-center justify-center>
      <form onSubmit={submitHandler} className='w-60 h-60 bg-blue-200 flex flex-col items-center justify-center gap-4'>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} className='border border-white rounded-md' type="text" placeholder='Enter Your Name' /> 
        <input value={age} onChange={(e)=>{
          setage(e.target.value)
        }} className='border border-white rounded-md' type="Number" placeholder='Enter Your Age' />
        <input className='bg-red-400 rounded-[10%] active:scale-95' type="submit" />
      </form>
      <div>
        {
          formData.map((item)=>{
            return ( // explicit return-> curly braces lagaye toh return ka use krna padega!
             <div className='w-[150px] h-[100px] bg-red-300 flex m-10 gap-5 flex-col items-center justify-center'>
              <h1>Name:{item.name}</h1>
              <h3>Age:{item.age}</h3>
             </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
