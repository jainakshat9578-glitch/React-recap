import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementValueByUserInput } from './redux/features/CounterSlice'

const App = () => {

  // data ko read krna ho store se toh useSelector ke through krte hai 
  const data = useSelector(state =>state.count.value)
  console.log(data)

  // kissi action jo slice me banaya hai usko trigger krne ke liye hum useDispatch ka use krte hai
  const dispatch = useDispatch()

  const handleIncrement = ()=>{
      dispatch(increment())
  }

  const handleDecrement = ()=>{
      dispatch(decrement())
  }

  const incrementByUserInput = ()=>{
      dispatch(incrementValueByUserInput(20))
  }

  return (
    <div>
      <h1>Counter : {data}</h1>
      <button onClick={handleIncrement}>Increment  By 1</button>
      <button onClick={handleDecrement}>Decrement  By 1</button>
       <button onClick={incrementByUserInput}>increment by yourself</button>
      
    </div>
  )
}

export default App
