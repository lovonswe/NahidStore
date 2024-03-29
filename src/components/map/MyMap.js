import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocationCity } from "@mui/icons-material";
import flame from "../../assets/categoryIcons/flames.png";
import L from "leaflet";
import AddressForm from "../order/AddressForm";

const mapAndFormContainerStyle = {
  display: 'flex',
  // flexWrap: 'wrap',
  overflow: 'auto',
  maxHeight: '600px',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const customIcon = L.icon({
  iconUrl: flame,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function LocationMarker() {
  const [position, setPosition] = useState({
    lat: 13,
    lng: 12
  });
  const [locationName, setLocationName] = useState("");

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      // map.locate()
    },
    //   locationfound(e) {
    //     setPosition(e.latlng)
    //     map.flyTo(e.latlng, map.getZoom())
    //   },
  });

  useEffect(() => {
    console.log("position : ", position.lat);
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${position.lat}+${position.lng}&key=4f729a1ff2824d3dbf07fb7be51456e7`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setLocationName(data.results[0].formatted);
          console.log("location : ", data.results[0].formatted)
        } else {
          setLocationName("Unknown Location");
        }
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
        setLocationName("Error fetching location");
      });
  }, [position]);

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapComponent() {
  return (
    <div className="map-and-form-container" style={mapAndFormContainerStyle}>
      <div className="map-container" style={{ height: "500px", width: "600px" }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={20}
          scrollWheelZoom={true}
          style={{
            height: "500px",
            width: "500px",
            // border: "1px solid red",
            // backgroundColor: "red",
          }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <Marker position={[51.505, -0.09]} icon={customIcon}>
            <Popup>pop up visible only after click</Popup>
            <Tooltip>MOhakhali tooltip</Tooltip>
          </Marker>
        </MapContainer>
      </div>
      <AddressForm />
    </div>
  );
}

export default MapComponent;
