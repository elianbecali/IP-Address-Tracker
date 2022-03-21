import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import mapIcon from '../../utils/mapIcon';

import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer
      center={[-11.4310986, -61.455267]}
      zoom={15}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: 'calc(100vh - 15.625rem)'
      }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      <Marker icon={mapIcon} position={[-11.4310986, -61.455267]} />
    </MapContainer>
  );
};

export default Map;
