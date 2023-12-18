import React from 'react';

interface ChangeMessageStateProps {
    handleMensagem: (msg: string) => void;
}

const ChangeMessageState: React.FC<ChangeMessageStateProps> = ({ handleMensagem }) => {
    const messages = ["oi", "ola", "Tudo bem"];

    function handleMensagem1() {
        handleMensagem(messages[0]);
    }

    function handleMensagem2() {
        handleMensagem(messages[1]);
    }

    function handleMensagem3() {
        handleMensagem(messages[2]);
    }

    return (
        <>
            <button onClick={handleMensagem1}>1</button>
            <button onClick={handleMensagem2}>2</button>
            <button onClick={handleMensagem3}>3</button>
        </>
    );
};

export default ChangeMessageState;
