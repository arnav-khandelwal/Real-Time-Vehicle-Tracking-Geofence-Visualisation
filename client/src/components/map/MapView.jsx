import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapView.scss';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function MapView() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.20, 28.61],
      zoom: 12,
    });

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainer} />;
}

export default MapView;
