import React from 'react'
import { useSelector } from 'react-redux'
import { useUser } from './hooks/useUser'

const App = () => {

  useUser()
  const data = useSelector(state=>state)
  console.log(data)

  
  return (
    <div>
      App
    </div>
  )
}

export default App
