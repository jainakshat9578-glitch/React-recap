import React, {useEffect, useState} from 'react'
import axios from "axios"
import PaginationBtn from './component/PaginationBtn'

const App = () => {

  const [postData, setpostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  const fetchData = async()=>{
   const res = await axios.get('https://dummyjson.com/products')

   setpostData(res.data.products)
  }

  useEffect(()=>{
    fetchData()
  },[]) 
  // ek baar api call krna hai isliye dependency array blank hai
  // agr update krna hota ya aur product add krne hote toh postData pass krdete

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = postData.slice(firstPostIndex,lastPostIndex)
// slice-> startIndex se endIndex tak ka data leke aajao!
  return (
   <div className='w-full h-screen flex flex-col'>
     <div className='w-full h-screen flex gap-5 flex-wrap'>
      {
        currentPost.map((item)=>{
           return (
            <div
  key={item.id}
  className="w-60 p-4 bg-white rounded-xl shadow-md flex flex-col items-center gap-3"
>
  <img
    src={item.images[0]}
    alt={item.title}
    className="w-32 h-32 object-contain"
  />

  <h2 className="text-lg font-semibold text-center">
    {item.title}
  </h2>

  <p className="text-xl font-bold text-green-600">
    ${item.price}
  </p>

  <p className="text-sm text-yellow-600">
    ⭐ {item.rating} / 5
  </p>
</div>
           )
        })
      }
     
    </div>
         <PaginationBtn totalPost = {postData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />

   </div>
)
}

export default App