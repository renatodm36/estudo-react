import React from 'react'
import './MyForm.css'

const MyForm: React.FC = () => {
    return (
        <>
            <div>
                {/*Criando formulario*/}
                <form>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type='text' name='name' placeholder='Digite seu nome'/>
                    </div>
                    {/* label envolvendo input*/}
                    <label>
                        <span>E-mail:</span>
                        <input type='email' name='email' placeholder='Digite o seu e-mail'></input>
                    </label>

                    <input type='submit' value='Enviar'></input>
                </form>

            </div>
        </>
    )
}

export default MyForm
