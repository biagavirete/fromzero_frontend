import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';


import api from '../../services/api';

function Register() {
    const history = useHistory();
    const [user, setUser] = useState({});

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        api.post('/users', user).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Cadastro de usuário</h2>
                <div className="row">
                    <span>Nome</span>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div className="row">
                    <span>E-mail</span>
                    <input type="text" name="email" onChange={handleChange} />
                </div>
                <div className="row">
                    <span>Nome de usuário</span>
                    <input type="text" name="usernarme" onChange={handleChange} />
                </div>
                <div className="row">
                    <span>Senha</span>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <div className="row">
                    <span>Telefone</span>
                    <input type="text" name="phone" onChange={handleChange} />
                </div>
                <div className="row">
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Register;