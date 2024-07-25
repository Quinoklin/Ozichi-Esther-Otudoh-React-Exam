import React from 'react'
import { ShoeData } from '../Data/Shoedata'

const Card = () => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center', padding:'5 px' }}>
        {ShoeData.map((card,index)=>(
            <div key={index} style={{margin:'10px', padding: '20px', height: '500px', border: '1px solid black', boxShadow: 'grey1px 10px 20px', color: 'black'}}>
                <img src={card.icon} alt="icon" width={200} />
                <h1>{card.title}</h1>
                <h3>{card.price}</h3>
                <p>{card.description}</p>

            </div>
        ))}
    </div>

  )
}

export default Card
