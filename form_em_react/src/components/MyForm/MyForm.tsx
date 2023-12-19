import React, { useState } from 'react';
import './MyForm.css';

const MyForm: React.FC = () => {
    // Gerenciamento de dados
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode utilizar 'name' e 'email' como quiser, por exemplo, enviá-los para algum servidor ou realizar outra lógica.
        console.log("Nome:", name);
        console.log("E-mail:", email);
    };

    return (
        <>
            <div>
                {/* Criando formulário */} {/*Envio de form*/}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Digite seu nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* label envolvendo input*/}
                    <div>
                        <label>
                            <span>E-mail:</span>
                            <input
                                type='email'
                                name='email'
                                placeholder='Digite o seu e-mail'
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <input type='submit' value='Enviar' />
                </form>
            </div>
        </>
    );
};

export default MyForm;
