import ReactMap, {Marker, Popup, ViewState} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapMarker from './MapMarker';
// import { useEffect, useRef, useState } from 'react';

interface MapProps {
    locations: string[];
}

const Map = ({
    locations
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
        {locations.includes('Canggu') &&
            <MapMarker
                // Lat & Long of Canggu
                latitude={-8.58}
                longitude={115.05}
                attractions={locations.filter(location => location === 'Canggu').length}
                name='Canggu'
            />
        }

        {locations.includes('Nusa') &&
            <MapMarker
                // Lat & Long of Nusa
                latitude={-8.73}
                longitude={115.50}
                attractions={locations.filter(location => location === 'Nusa').length}
                name='Nusa'
            />
        }

        {locations.includes('Ubud') &&
            <MapMarker
                // Lat & Long of Ubud
                latitude={-8.45}
                longitude={115.30}
                attractions={locations.filter(location => location === 'Ubud').length}
                name='Ubud'
            />
        }

        {locations.includes('Uluwatu') &&
            <MapMarker
                // Lat & Long of Uluwatu
                latitude={-8.80}
                longitude={115.15}
                attractions={locations.filter(location => location === 'Uluwatu').length}
                name='Uluwatu'
            />
        }

        {locations.includes('Amed') &&
            <MapMarker
                // Lat & Long of Amed
                latitude={-8.30}
                longitude={115.55}
                attractions={locations.filter(location => location === 'Amed').length}
                name='Amed'
            />
        }
    </ReactMap>
);

export default Map;