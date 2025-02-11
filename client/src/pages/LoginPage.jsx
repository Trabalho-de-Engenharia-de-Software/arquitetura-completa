import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../APIs/fetchLoginUser'; // Importe a função de login
import "./CSS/LoginPage.css";
import ReactVLibras from 'react-vlibras-plugin';
import { useAuth } from '../Auth/AuthContext'; // Importe o contexto de autenticação

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userType, setUserType] = useState('cliente'); // Estado para armazenar o tipo de usuário
    const navigate = useNavigate();
    const { login } = useAuth(); // Utilize o contexto de autenticação

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, senha, userType);
            if (userType === 'cliente' && data.client_id) {
                login({ id: data.client_id, type: 'cliente' }); // Armazena os dados do cliente no contexto
                navigate('/homeUser');
            } else if (userType === 'barber' && data.barber_id) {
                login({ id: data.barber_id, type: 'barber' }); // Armazena os dados do barbeiro no contexto
                navigate(`/barberUser/${data.barber_id}`);
            } else {
                alert('Login ou senha inválidos');
            }
        } catch (error) {
            alert('Erro ao fazer login');
        }
    };

    return (
        <div className='page_login_container'>
            <div className='arrow_container'>
                <a href="/"><img src="./img/arrow_icon.png" alt="Seta dourada com a ponta indicando para o lado esquerdo, com a funcionalidade de voltar a index" /></a>
            </div>
            <div className='login_container'>
                <div>
                    <h2>Login</h2>
                </div>
                <div className='container_form'>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="email" 
                            name="login_email" 
                            placeholder='Login' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            name="password_email" 
                            placeholder='Senha' 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                        />
                        <select 
                            name="user_type" 
                            value={userType} 
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="cliente">Cliente</option>
                            <option value="barber">Barbeiro</option>
                        </select>
                        <button className='button_login' type="submit">Entrar</button>
                    </form>
                </div>
                <p>Não tem Cadastro? <a href="/signin">Cadastre-se</a></p>
            </div>
            <div className='imagem_login'>
                <div className='logo_login'>
                    <img src="./img/Logo.png" alt="Logo Barbearia" />
                </div>
            </div>
            <ReactVLibras />
        </div>
    );
}