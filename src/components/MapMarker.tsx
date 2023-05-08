import { Marker } from 'react-map-gl';

interface MapMarkerProps {
    latitude: number;
    longitude: number;
    attractions: number;
    name: string;
}

const MapMarker = ({
    latitude,
    longitude,
    attractions,
    name
}: MapMarkerProps) =>  (
    <Marker
        latitude={latitude}
        longitude={longitude}
    >
        <div className='flex bg-secondary-dark p-[3px] rounded shadow-subtle'>
            <div className='flex justify-center items-center bg-primary-light w-5 h-5 rounded'>
                <p className='text-primary-dark text-sm'>
                    {attractions}
                </p>
            </div>
            <p className='text-primary-light text-sm ml-1.5 mr-1'>
                {name}
            </p>
        </div>
    </Marker>
);

export default MapMarker;