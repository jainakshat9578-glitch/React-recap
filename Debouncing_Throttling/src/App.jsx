import React, {useEffect, useState} from 'react'

const App = () => {

  const [search, setsearch] = useState("")

  // useEffect(()=>{
  //    console.log("hello")
  // },[search])
// Problem : abhi jo bhi charater search me type kroge uske sath console pe hello milega!

useEffect(()=>{

  const timer = setTimeout(()=>{
    console.log("api calling...",search)
  },5000) // time hai kitne der baad chelga

  return ()=>clearTimeout(timer)
},[search])
// ab search me likhne ke baad time reset ho jayega fir time hote hi clg kr dega!

let lastClicked = 0;
const OnClickedFn = ()=>{
  const now = Date.now() // time milta hai in milisecond
  if(now-lastClicked>=2000){
    console.log("Api calling...",now)
    lastClicked = now
  }
}
// kitni hi baar btn ko click krlo clg 2 sec ke baad hi hoga!
  return (
    <div>
      <input value={search} className='flex p-2 m-10 border'
      onChange={(e)=>{setsearch(e.target.value)}}
      type="text" placeholder='Search' />
      <button onClick={OnClickedFn} className='bg-blue-700 m-10 p-3 active:scale-95 border rounded-md'>Click Me</button>
    </div>
  )
}

export default App
