import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AgentsMap = () => {
  return (
    <section>
      <h1 className="my-5 text-center">الموزعون</h1>
      <div className="agents-map my-5 d-flex justify-content-center ">
        <MapContainer
          center={[30.033333, 31.233334]}
          zoom={9}
          scrollWheelZoom={false}
          style={{ height: "50vh", width: "70vw" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[30.033333, 31.233334]} />
          <Marker position={[30.3, 30.5]} />
          <Marker position={[30.199, 32.233334]} />
        </MapContainer>
      </div>
    </section>
  );
};

export default AgentsMap;
