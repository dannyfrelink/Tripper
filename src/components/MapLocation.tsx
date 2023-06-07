import ReactMap from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapLocationMarker from './MapLocationMarker';
import { useState } from 'react';

interface Activity {
    id: number,
    name: string,
    image: {
        src: string,
        alt: string
    },
    tourism: number,
    price: number,
    tags: string,
    icon: string,
    location: string,
    coordinates: string,
    details: string
};

interface MapLocationProps {
    activities: Activity[];
    location: string;
}

const MapLocation = ({
    activities,
    location
}: MapLocationProps) => {
    const [openMarker, setOpenMarker] = useState('');

    const onClick = (e:any) => {
        let element = e.target.tagName.toLowerCase();
        let target;
        if(element === 'img') {
            target = e.target.parentNode
        } else {target = e.target}

        setOpenMarker(target.id);
    }

    return (
        <ReactMap
            initialViewState={
                location === 'nusa' ?
                    {
                        // Lat, Long & Zoom of Nusa
                        latitude: -8.738,
                        longitude: 115.525,
                        zoom: 9.65
                    } :
                location === 'canggu' ?
                    {
                        // Lat, Long & Zoom of Canggu
                        latitude: -8.643,
                        longitude: 115.117,
                        zoom: 11.3
                    } :
                location === 'uluwatu' ?
                    {
                        // Lat, Long & Zoom of Uluwatu
                        latitude: -8.812,
                        longitude: 115.12,
                        zoom: 10.9
                    } :
                location === 'ubud' ?
                    {
                        // Lat, Long & Zoom of Ubud
                        latitude: -8.45,
                        longitude: 115.25,
                        zoom: 9.5
                    } :
                    {
                        // Lat, Long & Zoom of Amed
                        latitude: -8.38,
                        longitude: 115.623,
                        zoom: 10.35
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
            {
                activities.map((activity, index) => (
                        <MapLocationMarker
                            key={index}
                            activity={activity}
                            onClick={onClick}
                            openMarker={openMarker}
                        />
                    )
                )
            }
        </ReactMap>
    );
}

export default MapLocation;