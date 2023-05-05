import ReactMap, {Marker, Popup, ViewState} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
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
    ></ReactMap>
);

export default Map;