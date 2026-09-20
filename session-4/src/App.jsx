import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [edit, setedit] = useState(null)

  const [postData, setpostData] = useState(JSON.parse(localStorage.getItem("FormData")|| []))


  useEffect(()=>{
     localStorage.setItem('FormData',JSON.stringify(postData))
  },[postData])
//dependency Array->sirf ek baar chalega agr blank rehne diya toh
//dependency Array->agr kuch likh diya toh jab jab data change hoga tab tab chalega


  const SubmitHandler = (e)=>{ 
    e.preventDefault();

    if(edit != null){
       const copy = [...postData]
       copy[edit] = {title,desc}
       setpostData(copy)
       setedit(null)
    }
    else{
    const copyArr = [...postData]; //copy krlo postdata ko copyArr me
    copyArr.push({title,desc}) // push krdo array me title and desc object ki form me
    // push-> array ke last me element ko add krta hai
    setpostData(copyArr);
    }
     
    settitle("");
    setdesc("");
  }

  const deletePost = (idx)=>{
    const copyArr = [...postData]
    copyArr.splice(idx,1); // jobhi index aarha voh lo usko 1 elemnet ko krdo delete
    // splice-> do chiz leti hai kis index se delete krna hai or kitne element delete krne hai
    setpostData(copyArr)
  }

  // input ke andar jo value attribute uske andar jo bhi likhoge voh uss input ki value hojayegi!
  return (
    <div className='w-full h-screen p-10'>
      <form onSubmit={SubmitHandler}
      className='w-60 h-60 bg-zinc-300 rounded-md flex flex-col items-center justify-center gap-5'>
        <input value={title} 
        onChange={(e)=>{ //e->syntheticBaseEvent
        settitle(e.target.value) 
      }}
        className='border-2 rounded-md p-2' type="text" placeholder='Enter Your post title' />
         <input value={desc} 
         onChange={(e)=>{ //e->syntheticBaseEvent
        setdesc(e.target.value) 
      }}
         className='border-2 rounded-md p-2' type="text" placeholder='Enter Your post desc' />
          <button className='bg-blue-500 rounded-xl h-10 w-30 active:scale-90'>Create Post</button>
      </form>
      <Card postData={postData} deletePost={deletePost} setedit={setedit} settitle={settitle} setdesc={setdesc}/>
    </div>
  )
}

export default App
