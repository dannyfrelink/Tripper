import ReactMap from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapMarker from './MapMarker';

interface MapLocationProps {
    // locations: string[];
    location?: string;
}

const MapLocation = ({
    // locations
    location='Uluwatu'
}: MapLocationProps) => (
    <ReactMap
        initialViewState={
            location === 'Nusa' ?
                {
                    // Lat, Long & Zoom of Nusa
                    latitude: -8.738,
                    longitude: 115.525,
                    zoom: 9.65
                } :
            location === 'Canggu' ?
                {
                    // Lat, Long & Zoom of Canggu
                    latitude: -8.65,
                    longitude: 115.13,
                    zoom: 10.5
                } :
            location === 'Uluwatu' ?
                {
                    // Lat, Long & Zoom of Uluwatu
                    latitude: -8.82,
                    longitude: 115.147,
                    zoom: 11
                } :
            location === 'Ubud' ?
                {
                    // Lat, Long & Zoom of Ubud
                    latitude: -8.48,
                    longitude: 115.25,
                    zoom: 10
                } :
                {
                    // Lat, Long & Zoom of Amed
                    latitude: -8.37,
                    longitude: 115.623,
                    zoom: 10.5
                }
        }
        style={{
            width: '100%',
            height: '208px',
            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)'
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
    >
        {/* {locations.includes('Canggu') &&
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
                longitude={115.52}
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
        } */}
    </ReactMap>
);

export default MapLocation;