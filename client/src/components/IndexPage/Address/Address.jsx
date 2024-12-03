import "./Address.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GoogleMap, useJsApiLoader, Marker as GoogleMarker } from '@react-google-maps/api'

export default function Address() {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDY0y7YMjSh2NIIhZ1Phk9eVDSwpXnTW_0',
  })

  const position = {
    lat: -23.45596,
    lng: -46.67605
  }

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
        {/* <MapContainer center={[-23.55052, -46.633308]} zoom={15} style={{ height: "85vh", width: "100%", borderRadius: "10px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           
          />
          <Marker position={[-23.55052, -46.633308]}>
            <Popup>
              Rua Ari Carneiro Fernandes, 180, São Paulo - SP
            </Popup>
          </Marker>
        </MapContainer> */}

          {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{height: "85vh", width: "100%", borderRadius: "10px"}}
                center={position}
                zoom={20}
              >
                <GoogleMarker position={position}/>
              </GoogleMap>
            ) : (
              <></>
            )}
        </div>
      </div>
    </div>
  );

}
