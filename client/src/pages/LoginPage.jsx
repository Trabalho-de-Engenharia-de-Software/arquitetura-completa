import React from 'react'
import "./CSS/LoginPage.css"
import ReactVLibras from 'react-vlibras-plugin';

export default function LoginPage() {
  return (
    <div className='page_login_container'>
    
    <div className='arrow_container'><a href="/"><img src="./img/arrow_icon.png" alt="Seta dourada com a ponta indicando para o lado esquerdo, com a funcionalidade de voltar a index" /></a></div>

      <div className='login_container'>

      
          <div>
            <h2>Login</h2>
          </div>
          <div className='container_form'>
            <form>
              <input type="email" name="login_email" id=""  placeholder='Login'/>
              <input type="password" name="password_email" id="" placeholder='Senha'/>
              <button className='button_login'>Entrar</button>
            </form>
          </div>
          <p>Não tem Cadastro? <a href="/signin">Cadastre-se</a></p>
      </div>

      <div className='imagem_login'>
        <div className='logo_login'>
            <img src="./img/Logo.png" alt="Logo Barbearia" />
        </div>
      </div>
      <ReactVLibras/>
    </div>
  )
}
