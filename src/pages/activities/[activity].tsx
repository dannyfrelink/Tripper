import Header from '@/components/Header';
import Image from 'next/image';
import tourism from '../../svg/tourism.svg';
import price from '../../svg/price.svg';
import heartWhite from '../../svg/heart-white.svg';
import heartBlue from '../../svg/heart-blue.svg';

export default function ActivitiesDetail({activity}: any) {
    const tags = activity.tags.split(', ');
    const iconCount = ["", "", ""];
    const [favouriteActivity, setFavouriteActivity] = useState(false);
    const selectedActivities: number[] = [];

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageValues = Object.keys(storage).filter(a => a.length === 1);
        storageValues.map(value => selectedActivities.push(Number(value)));

        useEffect(() => {
            selectedActivities.includes(activity.id) ?
                setFavouriteActivity(true) :
                setFavouriteActivity(false)
        }, [])
    }

    const handleFavourite = () => {
        setFavouriteActivity(!favouriteActivity);
        const index = selectedActivities.indexOf(activity.id);

        selectedActivities.indexOf(activity.id) === -1 ? 
            selectedActivities.push(activity.id) :
            selectedActivities.splice(index, 1);

        localStorage.clear();
        selectedActivities.map(activity => localStorage.setItem(activity.toString(), activity.toString()));
    }

    return (
        <main>
            <Header
                info={true}
                rightAlt='Navigeren naar Belangrijke informatie'
                backArrow={true}
            />

            <div className='flex relative bg-secondary-dark h-48 w-11/12 mx-auto py-[18px] px-3.5 rounded-xl'>
                <Image
                    className='object-cover object-center h-full w-1/3 mr-4'
                    width={500}
                    height={500}
                    src={activity.image.src}
                    alt={activity.image.alt}
                />

                <div>
                    <h2 className='text-primary-light font-semibold text-lg'>{activity.name}</h2>

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

                    <div className='flex justify-between w-9 ml-0.5 mt-2'>
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

                    <ul className='text-primary-light text-normal list-disc list-inside mt-2'>
                        {tags.map((tag: any) => <li>{tag}</li>)}
                    </ul>

                    <Image
                        onClick={handleFavourite}
                        className='absolute right-4 bottom-5 scale-125'
                        src={favouriteActivity ? heartBlue : heartWhite}
                        alt='Hart icoon'
                    />
                </div>
            </div>
        </main>
    )
}

// Fetching local activities json
import fsPromises from 'fs/promises';
import path from 'path';
import { useEffect, useState } from 'react';

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const json = JSON.parse(jsonData.toString());
    const activities = json.attractions;
  
    const paths = activities.map((activity: any) => ({
      params: { activity: activity.id.toString() },
    }))
  
    return { paths, fallback: false }
}

// Filter out current activity
export async function getStaticProps({params}: any) {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const json = JSON.parse(jsonData.toString());
    const activities = json.attractions;

    return {
        props: {
            activity: activities[params.activity]
        }
    }
}