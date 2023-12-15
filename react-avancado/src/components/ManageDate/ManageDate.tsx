import React from "react"
import { useState } from "react"

const ManageDate: React.FC= () => {
  
  const[number, setNumber] = useState(0);
  
  return (
    <>
    <div>
      <p>Valor number: {number}</p>
      <button onClick={() => setNumber(number+5)}>Adicione mais 5</button>
    </div>
    </>
  )
}

export default ManageDate