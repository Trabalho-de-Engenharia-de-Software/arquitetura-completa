import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_header'><img src="./img/Logo.png" alt="" /></div>
        <div className='button_container'>
        <a href="/login"><button className='login_button'>Login</button></a>
        <a href="/signin"><button className='signIn_button'>Inscrever-se</button></a>
        </div>
    </div>
  )
}

export default Header