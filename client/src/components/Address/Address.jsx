import "./Address.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <div className="address_maps">
        <div>
        <MapContainer center={[-23.55052, -46.633308]} zoom={15} style={{ height: "85vh", width: "100%", borderRadius: "10px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-23.55052, -46.633308]}>
            <Popup>
              Rua Ari Carneiro Fernandes, 180, São Paulo - SP
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </div>
  );
}
