import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_header'>Logo</div>
        <div className='button_container'>
            <button className='login_button'>Login</button>
            <button className='signIn_button'>Inscrever-se</button>
        </div>
    </div>
  )
}

export default Header