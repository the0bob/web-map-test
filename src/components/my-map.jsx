import React, { useEffect } from 'react';
import L from 'leaflet';
import {} from 'mapbox-gl-leaflet';
import DevService from '../services/DevService';
import './my-map.scss';

function MyMap() {
  let mapContainer;

  useEffect(() => {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    const map = L.map(mapContainer).setView([initialState.lat, initialState.lng], initialState.zoom);

    // the attribution is required for the Geoapify Free tariff plan
    map.attributionControl.setPrefix('').addAttribution('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>');

    // var myAPIKey = 'YOUR_API_KEY_HERE';
    // const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
    // const mapStyle = '';

    const gl = L.mapboxGL({
      // style: `${mapStyle}?apiKey=${myAPIKey}`,
      style: `mapbox://styles/mapbox/streets-v11`,
      // accessToken: 'no-token',
      accessToken: 'pk.eyJ1IjoibWFwcy1vbi1tYXBzLW9uLW1hcHMiLCJhIjoiY2tqcDQxZWUyMHpxNjJybXVrOXV6Ynk2NyJ9.3ntps4DarQ7EbtISielj4w',
    }).addTo(map);

    DevService.log(gl);
  }, [mapContainer]);

  return (
    <div className="map-container" ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;