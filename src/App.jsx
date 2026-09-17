import React from 'react'
import Card from './components/Card'

const App = () => {
  const persons =[
    {
      id:1,
      name: 'Aman',
      age: 19,
      url: 'https://images.unsplash.com/photo-1789348982785-9a5e3931d8d2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:2,
      name: 'Akshat',
      age: 18,
      url: 'https://images.unsplash.com/photo-1789348982785-9a5e3931d8d2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  return (
    <div>
      {/* <Card name='Akshat' age='18'/>
      <Card name='Akshita' age='20'/> */}
      <Card data={persons} status='follow'/>
    </div>
  )
}

export default App
