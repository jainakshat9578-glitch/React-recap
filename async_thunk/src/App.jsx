import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from './redux/features/Slice'

const App = () => {

 const data = useSelector(state=>state.user)
 console.log(data)

 const dispatch = useDispatch()

 const getProductData = ()=>{
     dispatch(fetchData())
 }
  return (
    <button onClick={getProductData}>Get Data</button>
  )
}

export default App
