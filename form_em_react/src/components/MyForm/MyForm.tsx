import React, { useState } from 'react';
import './MyForm.css';

interface Usuario {
    user: {
        name: string;
        email: string;
        bio: string;
        role: string;
    };
}

const MyForm: React.FC<Usuario> = ({ user }) => {
    // Gerenciamento de dados
    const [name, setName] = useState((user ? user.name : ''));
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode utilizar 'name' e 'email' como quiser, por exemplo, enviá-los para algum servidor ou realizar outra lógica.
        console.log("Nome:", name);
        console.log("E-mail:", email);
        console.log("Bio:", bio);
        console.log("Role:", role);


        // Limpar os campos após enviar
        setName("");
        setEmail("");
        setBio("");
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
                    <div>
                        <label>
                            <span>Bio:</span>
                            <textarea
                                name="bio"
                                placeholder='Descrição do usuário'
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Função:</span>
                            <select
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value={"user"}>Usuário</option>
                                <option value={"editor"}>Editor</option>
                                <option value={"admin"}>Administrador</option>

                            </select>
                        </label>
                    </div>
                    <input type='submit' value='Enviar' />
                </form>
            </div>
        </>
    );
};

export default MyForm;
