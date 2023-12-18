import React from 'react';

interface ExecuteFunctionProps {
  myFunction: () => void; // Assuming showMesagem has a void return type
}
const ExecuteFuntion: React.FC<ExecuteFunctionProps> = ({myFunction}) => {
  return (
   <>
    <div>Execute Function</div>
    <button onClick={myFunction}>Clique Aqui</button>
   </>
  )
}

export default ExecuteFuntion
