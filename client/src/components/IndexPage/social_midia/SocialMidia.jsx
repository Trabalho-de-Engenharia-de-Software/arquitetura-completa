import "./SocialMidia.css";

export default function SocialMidia() {
  return (
    <div className="social_midia_conatainer">
      <div className="container_hours">
        <div>
          <h2 style={{fontFamily: "Jaini Purva", fontSize: "8vh"}}>Horário de Funcionamento:</h2>
          <h3>Terça a Domingo</h3>
          <h3>09h00 - 22h00</h3>
        </div>
      </div>

      <div className="container_contact">
        <h2>Contato</h2>
        <div>
        <div className="instagram_container">
          <div className="container_icon_instagram">
            <img src="./img/instagram.png" alt="Icone do Aplicativo Instagram" />
          </div>
          <div className="text_instagram">@ObarbeiroLuis</div>
        </div>

        <div className="whatsapp_container">
          <div className="container_icon_whatsapp">
            <img src="./img/whatsapp.png" alt="Icone do Aplicativo WhatsApp" />
          </div>
          <div className="text_number">(11) 99999-9999</div>
        </div>
        </div>
      </div>
    </div>
  );
}
