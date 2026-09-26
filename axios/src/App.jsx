import React, {useEffect, useState} from 'react'
import axios from "axios"

const App = () => {

  const [data, setdata] = useState([])
  const [Page, setPage] = useState([])

  const getData = async()=>{
     const data = await axios.get('https://picsum.photos/v2/list',{
      params: {
        page: Page,
        limit: 10
      } //pagenation -> limit the data show in a particular pages
     })
      setdata(data.data)
   }

   useEffect(()=>{
    getData()
   },[Page])

  return (
    <div className='p-5'>
       <div className='mt-10 flex flex-wrap gap-5'>
        {data.map((item)=>{
         return  <div key={item.id} className='w-60 h-60 bg-zinc-300 rounded-md'>
             <img className='h-50 w-80 rounded-md p-3 object-cover' src={item.download_url} alt="" />
             <h1 className='p-2'>{item.author}</h1>
        </div>
        })}
       </div>
       <button className='bg-blue-700' onClick={()=>setPage(Page-1)}>Previous</button>
       <button className='bg-blue-800' onClick={()=>setPage(Page+1)}>Next</button>
    </div>
  )
}

export default App
