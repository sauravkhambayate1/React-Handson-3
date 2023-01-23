import React, { useState } from 'react'

const Compo = () => {

    const[data, setData] = useState(true)

const ChangeClick = ()=>{
    setData(!data)
}

  return (
    <div>
      {
         data ? <div>Hello 1st div</div>: <div>Hello 2nd div</div>
      }
      

      <button onClick={ChangeClick}>ChangeClick</button>
    </div>
  )
}

export default Compo
