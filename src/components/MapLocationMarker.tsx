import { Marker } from 'react-map-gl';
import Image from 'next/image';
import tourism from '../svg/tourism.svg';
import price from '../svg/price.svg';

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

interface MapLocationMarkerProps {
    activity: Activity;
    onClick: (e:any) => void;
    openMarker: string;
}

const MapLocationMarker = ({
    activity,
    onClick,
    openMarker
}: MapLocationMarkerProps) => {
    const coordinates = activity.coordinates;
    const latLong = coordinates.split(", ");
    const latitude = Number(latLong[0]);
    const longitude = Number(latLong[1]);
    const icon = activity.icon;
    const iconCount = ["", "", ""];

    return (
        <Marker
            latitude={latitude}
            longitude={longitude}
            style={openMarker === activity.id.toString() ? {
                zIndex: '50'
            } : {
                zIndex: '0'
            }}
        >
            {
                openMarker !== activity.id.toString() ?
                    <div
                        id={activity.id.toString()}
                        className='bg-secondary-dark h-6 w-6 p-1 shadow-subtle rounded-2xl'
                        onClick={onClick}
                    >
                        <Image
                            src={`/assets/activity-icons/icon-${icon}.png`}
                            alt={`${icon} icon`}
                            width={500}
                            height={500}
                        /> 
                    </div> :
                    <div
                        id={activity.id.toString()}
                        className='flex bg-secondary-dark text-primary-light text-sm py-1.5 px-2 rounded-lg'
                    >
                        <Image
                            src={activity.image.src}
                            alt={activity.image.alt}
                            width={500}
                            height={500}
                            className='w-12 min-h-[64px] object-cover object-center mr-1.5'
                        />

                        <div className='mt-0.5'>
                            <h2>
                                {activity.name}
                            </h2>

                            <div className='flex justify-between w-10 mt-1'>
                                {
                                    iconCount.map((c, index) =>
                                        <Image
                                            key={index}
                                            className={`scale-110 ${index < activity.tourism ? '' : 'opacity-30'}`}
                                            src={tourism}
                                            alt="Poppetje icoon"
                                        />
                                    )
                                }
                            </div>

                            <div className='flex justify-between w-9 ml-0.5 mt-2'>
                                {
                                iconCount.map((c, index) =>
                                        <Image
                                            key={index}
                                            className={`scale-110 ${index < activity.price ? '' : 'opacity-30'}`}
                                            src={price}
                                            alt="Euro icoon"
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </Marker>
    );
}

export default MapLocationMarker;