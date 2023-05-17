import { Marker } from 'react-map-gl';
import Image from 'next/image';

interface MapLocationMarkerProps {
    latitude: number;
    longitude: number;
    icon: string;
}

const MapLocationMarker = ({
    latitude,
    longitude,
    icon
}: MapLocationMarkerProps) => (
    <Marker
        latitude={latitude}
        longitude={longitude}
    >
        <div className='bg-secondary-dark h-6 w-6 p-1 shadow-subtle rounded-2xl'>
            <Image
                src={`/assets/activity-icons/icon-${icon}.png`}
                alt={`${icon} icon`}
                width={500}
                height={500}
            />
        </div>
    </Marker>
);

export default MapLocationMarker;