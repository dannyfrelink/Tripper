import { Marker } from 'react-map-gl';
import Image from 'next/image';
import mapMarker from '../svg/map-location-marker.svg';

interface MapLocationMarkerProps {
    latitude: number;
    longitude: number;
}

const MapLocationMarker = ({
    latitude,
    longitude
}: MapLocationMarkerProps) =>  (
    <Marker
        latitude={latitude}
        longitude={longitude}
    >
        <Image
            src={mapMarker}
            alt='Map Marker'
        />
        
        {/* <div className='flex bg-secondary-dark p-[3px] rounded shadow-subtle'>
            <p className='text-primary-light text-sm ml-1.5 mr-1'>
                Kelingking
            </p>
        </div> */}
    </Marker>
);

export default MapLocationMarker;