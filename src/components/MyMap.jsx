import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  return (
    <div className="map d-flex justify-content-center">
      <MapContainer
        center={[30.033333, 31.233334]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "65vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[30.033333, 31.233334]} />
      </MapContainer>
    </div>
  );
};

export default MyMap;
