import ReactMap, {Marker, Popup, ViewState} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapMarker from './MapMarker';
// import { useEffect, useRef, useState } from 'react';

interface MapProps {

}

const Map = ({

}: MapProps) =>  (
    <ReactMap
        initialViewState={{
            // Lat & Long of Bali
            latitude: -8.45,
            longitude: 115.05,
            zoom: 7.45
        }}
        style={{
            width: '100%',
            height: '208px',
            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)'
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
    >
        <MapMarker 
            latitude={-8.58}
            longitude={115.05}
            attractions={3}
            name='Canggu'
        />

        <MapMarker 
            latitude={-8.73}
            longitude={115.50}
            attractions={2}
            name='Nusa'
        />

        <MapMarker 
            latitude={-8.45}
            longitude={115.30}
            attractions={1}
            name='Ubud'
        />

        <MapMarker 
            latitude={-8.80}
            longitude={115.15}
            attractions={7}
            name='Uluwatu'
        />

        <MapMarker 
            latitude={-8.30}
            longitude={115.55}
            attractions={5}
            name='Amed'
        />
    </ReactMap>
);

export default Map;