import "./Address.css";

export default function Address() {
  return (
    <div className="address_container">
      <div className="title_address_container">
        <div className="golden_line">
          <img src="/img/GoldLine.png" alt="" />
        </div>
        <h2>Localização</h2>
        <div className="golden_line">
          <img src="/img/GoldLine.png" alt="" />
        </div>
      </div>
      <p>Rua Ari Carneiro Fernandes, 180</p>
      <div className="address_maps">Mapa</div>
    </div>
  );
}
