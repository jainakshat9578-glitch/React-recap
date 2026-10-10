import { useCallback, useMemo, useState } from 'react'
import About from './components/About'

const App = () => {

  console.log("App rendering")
  const [count, setcount] = useState(0)
  const [users, setusers] = useState({
    name:"Akshat",
    id: 1
  })

  // const greet = useCallback(()=>{
  //   console.log("Greeting...")
  // },[])
// dependency->kab aapko aapka function chalana hai 


   const heavycalc = useMemo(()=>{
    console.log("calculating value...")
    for(let i=0; i<10000; i++){}
   },[])

  return (
    <div className='p-5'>
      <h1>Count-{count}</h1>
      <h1>User - {users.name}</h1>
      <h3>calculation - {heavycalc}</h3>
      <button className='py-2 px-8 mt-5 mb-5 rounded-md bg-blue-500' onClick={()=>setcount(count+1)}>Increment</button>
      {/* <About users={users} /> 
      abhi user static hai toh about re-render nhi hoga */}

       <button className='py-2 px-8 mt-5 mb-5 rounded-md bg-red-500' onClick={()=>setusers({...users,name:"Akshita"})}>Change user</button>
       {/* <About users={users} count={count} /> */}

       <About heavycalc={heavycalc} />
    </div>
  )
}

export default App
