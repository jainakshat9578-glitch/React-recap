import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [postData, setpostData] = useState([])
  const [page, setpage] = useState(1)

  const [loading, setloading] = useState(true)

  const fetchData = async()=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`)
    const data = res.data

    setpostData(prev=>[...prev,...data])
    setloading(false)
  }

    useEffect(()=>{
    fetchData()
  },[page])

    console.log("Page : ",page)

  const handleScroll = async()=>{
//     console.log("Scroll-Height : ",document.documentElement.scrollHeight)
// // pure document ki height dedega chahe elements overflow ho or viewport me na ho sabki milake dega!  
//     console.log("Inner-Height : ",window.innerHeight)  
// // only viewport ki height (height of visible browser)    
//     console.log("Scroll-Top : ",document.documentElement.scrollTop)
// // no. of pixels the top of the document is hidden above the viewport    

   if(window.innerHeight + document.documentElement.scrollTop+1 > document.documentElement.scrollHeight){
     setpage((prev)=>prev+1)
     setloading(true)
   }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)

    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])
  
  return (
    <div className='w-full h-screen p-5 bg-black'>
      <h1 className='text-center text-white font-bold text-5xl'>Heyy Infinite Scrolling</h1>
      <div className='w-full mt-4 flex flex-wrap gap-4 items-center justify-center'>
      {
        postData.map((item)=>(
          <div className='w-100 h-100 rounded-md bg-gray-500 text-center flex items-center justify-center'>
            <h1 className='text-3xl'>{item.title}</h1>
          </div>
        ))
      }
    </div>
    {loading && <p className='text-2xl '>Loading...</p>}
    </div>
  )
}

export default App
