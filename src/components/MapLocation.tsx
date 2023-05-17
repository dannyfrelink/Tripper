import ReactMap from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapLocationMarker from './MapLocationMarker';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    location: string,
    coordinates: string,
    details: string
};

interface MapLocationProps {
    activities: Activity[];
}

const MapLocation = ({
    activities
}: MapLocationProps) => {
    const { asPath } = useRouter();
    const location = asPath.split('/overview/')[1];

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
                        latitude: -8.65,
                        longitude: 115.13,
                        zoom: 10.5
                    } :
                location === 'uluwatu' ?
                    {
                        // Lat, Long & Zoom of Uluwatu
                        latitude: -8.82,
                        longitude: 115.147,
                        zoom: 11
                    } :
                location === 'ubud' ?
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
            {
                activities.map(activity => {
                    const coordinates = activity.coordinates;
                    const latLong = coordinates.split(", ");

                    return (
                        <MapLocationMarker
                            latitude={Number(latLong[0])}
                            longitude={Number(latLong[1])}
                        />
                    )
                })
            }
        </ReactMap>
    );
}

export default MapLocation;