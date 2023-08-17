"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationGPS = ({ loc, display }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[320px] lg:h-[350px]">
      <MapContainer
        center={loc}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full  h-[320px] lg:w-[320px] lg:rounded-[15px] "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={loc}>
          <Popup>{display}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationGPS;
