import React from 'react'
import { useState } from 'react';

const MyComponent: React.FC = () => {
    const n = 15;
    const [name] = useState("Renato")

    return (
        <>

            <h2 style={n < 10 ? { color: "Red" } : { color: "pink" }}>Teste condição no css</h2>
            <h2 style={name== "Renato" ? {color: "Blue"}: {}}>Renato</h2>

        </>
    )
}

export default MyComponent
