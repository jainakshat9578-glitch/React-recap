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
//      seta((prev)=> prev+1)  // prev as current or previous state mil rhi hai
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
  const [postData, setpostData] = useState([
    {
    id:1,
    name: "Akshat",
    desc: "xdcfvgbhjcnd",
    likeCount: 0,
  },
  {
    id:2,
    name: "Akshita",
    desc: "xdcfvgbhjcnd",
    likeCount: 0,
  }
])

const like = (id)=>{
    setpostData((prev)=> prev.map((item)=>
      item.id === id ? {...item,likeCount: item.likeCount+1} : item
    ))
}

const dislike = (id)=>{
  setpostData((prev)=> prev.map((item)=> 
    item.id===id && item.likeCount>=1 ? {...item, likeCount: item.likeCount-1} : item
))
}
  
  return (
    <div className='px-10 py-5'>
      <Card postData={postData} like={like} dislike={dislike}/>
    </div>
  )
}

export default App
