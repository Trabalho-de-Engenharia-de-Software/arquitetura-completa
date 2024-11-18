import "./Footer.css"

import React from 'react'

export default function Footer() {
  return (
    <div className="Footer">
      <img src="./img/GoldLine.png" alt="" />
        <div className="conteudo_container_footer">
            <div className="button_container_footer">
              <h2>Agende Seu horário</h2>
              <a href="/login"><button>Agendar</button></a>
            </div>
            <div></div>
            <div></div>
            <div className="container_footer">
              <div className="Logo_footer">
                 <img src="./img/Logo.png" alt="" />
              </div>

              <div className="midia_container">
                <a href=""><img src="./img/whatsapp.png" alt="Logo do Aplicativo WhatsApp" /></a>
                <a href=""><img src="./img/instagram.png" alt="Logo do Aplicativo Instagram" /></a>
                <a href=""><img src="./img/mail.png" alt="" /></a>
              </div>
            </div>
        </div>
        <div className="copyright_container">
            <img src="./img/GoldLine.png" alt="" />
            <h2>© IFormais 2024 | All Right Reserved</h2>
            <img src="./img/GoldLine.png" alt="" />
        </div>
    </div>
  )
}
