import React, { useState } from 'react'

const ConditionalRender: React.FC = () => {
    const [x] = useState(true);
    
    const [name,setName] = useState("Renatoo");
    function mudarNomeParaRenato(){
        setName("Renato");
    }
    return (
        <>
            <div>
                <h1>Isso será exibido?</h1>
                {
                    x && <p>Se x for true,Sim!</p>
                }
                {
                    !x && <p>Se x for false, Sim!</p>
                }
                {/*If Ternário*/}
                <h1>If Tenario</h1>
                {name == "Renato" ?
                    (<>
                        <div>
                            <p>Nome é igual {name}</p>
                        </div>
                    </>)
                    :
                    (<>
                        <div>
                            <p>Nome é não Renato</p>
                        </div>
                    </>)
                }
                <button onClick={mudarNomeParaRenato}>Mudar nome para Renato</button>
            </div>
        </>


    )
}

export default ConditionalRender
