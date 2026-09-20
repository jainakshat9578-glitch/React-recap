import React from 'react'

const Card = ({postData, deletePost}) => {
  return (
    <div>
           { postData.map((post,idx)=>(
            <div key={idx} className='w-[200px] h-[150px] bg-blue-300 flex m-10 gap-5 flex-col items-center justify-center rounded-xl'>
              <h1>Name:{post.title}</h1>
              <p>Description: {post.desc}</p>      
           <button onClick={()=>deletePost(idx)} className='bg-red-500 rounded-xl h-10 w-30 active:scale-90'>Delete Post</button>
             </div>
            ))}   
      </div>
  )
}

export default Card
