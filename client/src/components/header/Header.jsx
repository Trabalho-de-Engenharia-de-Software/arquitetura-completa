import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_header'>Logo</div>
        <div className='button_container'>
        <a href="/login"><button className='login_button'>Login</button></a>
            <button className='signIn_button'>Inscrever-se</button>
        </div>
    </div>
  )
}

export default Header