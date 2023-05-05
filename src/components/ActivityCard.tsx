import Image from 'next/image';
import heartWhite from '../svg/heart-white.svg';
import heartBlue from '../svg/heart-blue.svg';
import tourism from '../svg/tourism.svg';
import price from '../svg/price.svg';
import { useEffect, useState } from 'react';

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
        href: string,
        details: string
    };
    onClick: (e: any) => void;
}

const ActivityCard = ({
    activity,
    onClick,
}: ActivityCardProps) => {
    const [favouriteActivity, setFavouriteActivity] = useState(false);
    const tags = activity.tags.split(', ');
    const iconCount = ["", "", ""];

    let storage;
    let storageValues: string[];
    if (typeof window !== 'undefined') {
        storage = { ... localStorage }
        storageValues = Object.keys(storage).filter(a => a.length === 1);
        
        useEffect(() => {
            storageValues.includes(activity.id.toString()) &&
                setFavouriteActivity(true);
        }, []);
    }

    return (
        <div className="flex items-center relative bg-secondary-dark w-11/12 h-48 mx-auto mt-4 p-4 rounded-xl shadow-subtle">
            <div className='w-1/3 h-full mr-4'>
                <Image 
                    className='object-cover object-center h-full'
                    width={500}
                    height={500}
                    src={activity.image.src}
                    alt={activity.image.alt} 
                />
            </div>

            <div>
                <h2 className='text-primary-light font-semibold'>{activity.name}</h2>

                <div className='flex justify-between w-10 mt-1'>
                    {iconCount.map((c, index) => index < activity.tourism ?
                        <Image
                            className='scale-110'
                            src={tourism}
                            alt="Poppetje icoon"
                        /> :
                        <Image
                            className='scale-110 opacity-30'
                            src={tourism}
                            alt="Poppetje icoon"
                        />
                    )}
                </div>

                <div className='flex justify-between w-9 ml-0.5 mt-1.5'>
                    {iconCount.map((c, index) => index < activity.price ?
                        <Image
                            className='scale-110'
                            src={price}
                            alt="Euro icoon"
                        /> :
                        <Image
                            className='scale-110 opacity-30'
                            src={price}
                            alt="Euro icoon"
                        />
                    )}
                </div>

                <ul className='text-primary-light list-disc list-inside text-sm mt-2'>
                    {tags.map(tag => <li>{tag}</li>)}
                </ul>

                <a className='block w-fit text-primary-light border-[1px] rounded-md text-xs py-0.5 px-1.5 mt-2' href={`/activities${activity.href}`}>Meer weten</a>
            </div>

            <div 
                onClick={() => {
                    onClick(activity.id);
                    setFavouriteActivity(!favouriteActivity)
                }}
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