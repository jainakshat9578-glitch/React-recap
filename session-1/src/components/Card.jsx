import React from 'react'
import Button from './Button'

const Card = ({data, status}) => {
  return (
    <div>
      {data.map((item)=>{
        return <div className="card" status='follow'>
        <img src={item.url} alt="" />
        <h1>{item.name}</h1>
        <h2>{item.age}</h2>
        <h3>{item.id}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iusto.</p>
        <Button status={status} />
      </div>
      })}
    </div>
  )
}
// object se aaya hua data . lagake dikha sakte hai destructrue krke!
// array se aaya hua deta Map ke help se dikhana hota hai!

export default Card
