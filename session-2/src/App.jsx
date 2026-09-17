// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   const [a, seta] = useState(10)

//   const incrementBy1 = ()=>{
//     // seta(a+1) 
//     // seta(a+1) 
//     // seta(a+1) 
//     // seta(a+1) 
// // value abhi bhi 1 se hi increment hogi react sabko grp krdeta except last vala or last vala hi chalta hai!  
//      seta((prev)=> prev+1)  
//      seta((prev)=> prev+1)  
//      seta((prev)=> prev+1)  
// // ab value 3 se increase hogi this concept is known as Batch Updating!    
//   }
  
//   const decrementBy1 = ()=>{
//     seta(a-1)
//   }
  
//   return (
//     <div className='text-8xl'>
//       <h1>{a}</h1>
//       <button className='px-8 py-3 rounded-md bg-blue-500 active:scale-95 m-5' 
//       onClick={incrementBy1}
//       >incrementBy1 </button>
//       <button className='px-8 py-3 rounded-md bg-blue-500 active:scale-95 m-5' 
//       onClick={decrementBy1}
//       >decrementBy1 </button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Card from './components/Card'
import { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  const [postData, setpostData] = useState([
    {
    name: "Akshat",
    desc: "xdcfvgbhjcnd",
    likeCount: 0,
  },
  {
    name: "Akshita",
    desc: "xdcfvgbhjcnd",
    likeCount: 10,
  }
])

const like = ()=>{
  setcount(count+1)
}
  
  return (
    <div className='px-10 py-5'>
      <Card postData={postData} count={count} like={like}/>
    </div>
  )
}

export default App
