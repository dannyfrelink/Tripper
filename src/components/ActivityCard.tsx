import Image from 'next/image';
import heartWhite from '../svg/heart-white.svg';
import heartBlue from '../svg/heart-blue.svg';
import { useState } from 'react';

interface ActivityCardProps {
    activity: {
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
        details: string
    };
}

const ActivityCard = ({
    activity
}: ActivityCardProps) => {
    const [favouriteActivity, setFavouriteActivity] = useState(false);

    return (
        <div className="relative bg-secondary-dark w-11/12 h-48 mx-auto mt-4 rounded-xl">
            <div className='w-1/3 s'>
                <Image 
                    className='object-cover object-center'
                    width={500}
                    height={500}
                    src={activity.image.src}
                    alt={activity.image.alt} 
                />
            </div>






            <div 
                onClick={() => setFavouriteActivity(!favouriteActivity)}
                className='absolute top-5 right-[18px] scale-110'
            >
                <Image
                    className='m-auto scale-110'
                    src={favouriteActivity ? heartBlue : heartWhite}
                    alt='Tripper logo'
                />
            </div>

            <p className='absolute bottom-1.5 right-2 text-primary-light text-xs'>
                {activity.location}
            </p>
            
        </div>
    );
}

export default ActivityCard;