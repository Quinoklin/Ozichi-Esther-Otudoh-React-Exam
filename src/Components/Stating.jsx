import {useState} from 'react'

const Aviella = () => {
    const [goodbye, setGoodbye] =useState ('Takecare')
    const HandleGoodbye =() =>{
        setGoodbye ('see you later')
    }
  return (
    <div>
      <p>{goodbye}</p>
      <button onClick={HandleGoodbye}>Goodbye</button>
    </div>
  )
}

export default Aviella
