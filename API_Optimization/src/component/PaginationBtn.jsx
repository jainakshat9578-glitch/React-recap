import React from 'react'

const PaginationBtn = ({totalPost, postPerPage,setCurrentPage}) => {

    let pages = []

    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
          pages.push(i)
    }
// Math.ceil() -> gives nearest integer value (roundoff)   
  return (
    <div className='w-full m-10 flex gap-2 items-center justify-center'>
      {pages.map((page)=>(
        <button onClick={()=>{
            setCurrentPage(page)
        }} className='w-10 h-10 border rounded-md active:scale-95'>{page}</button>
      ))}
    </div>
  )
}

export default PaginationBtn