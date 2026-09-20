import React from 'react'

const Card = ({postData, deletePost, setedit, settitle, setdesc}) => {
  return (
    <div>
           { postData.map((post,idx)=>(
            <div key={idx} className='w-[250px] h-[200px] bg-blue-300 flex m-10 gap-5 flex-col items-center justify-center rounded-xl'>
              <h1 className='font-bold'>Name:{post.title}</h1>
              <p className='font-semibold'>Description: {post.desc}</p>      
           <button onClick={()=>deletePost(idx)} className='bg-red-500 rounded-xl h-6 w-30 active:scale-90'>Delete Post</button>
           <button onClick={()=>{
            settitle(post.title)
            setdesc(post.desc)
            setedit(idx)
           }} className='bg-blue-500 rounded-xl h-6 w-30 active:scale-90'>Edit Post</button>
             </div>
            ))}   
      </div>
  )
}

export default Card
