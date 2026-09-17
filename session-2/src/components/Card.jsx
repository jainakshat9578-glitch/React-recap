import React from 'react'
import { useState } from 'react'

const Card = ({postData,like,dislike}) => {
    
  return (
    <div className='w-full flex gap-5'>
      {postData.map((item)=>{
        return (
        <div key={item.id} className='card px-3 flex flex-col justify-center items-center w-60 h-60 bg-zinc-600 rounded-md'>
        <img className='w-20 h-20 rounded-[50%]' src="https://images.unsplash.com/photo-1786381624438-da16f6cfb834?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
        <p>LikeCount : {item.likeCount}</p>
        <div className='w-full flex gap-5'>
          <button onClick={()=> like(item.id)} className='px-8 py-3 bg-blue-500 rounded-md'>Like</button>
        <button onClick={()=> dislike(item.id)} className='px-8 py-3 bg-red-500 rounded-md'>Dislike</button>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Card
