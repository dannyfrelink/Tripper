import Image from 'next/image';
import tourism from '../svg/tourism.svg';
import price from '../svg/price.svg';
import heartWhite from '../svg/heart-white.svg';
import heartBlue from '../svg/heart-blue.svg';

interface ActivityDetailsProps {
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
    onClick: () => void;
    favouriteActivity: boolean;
}

const ActivityDetails = ({
    activity,
    onClick,
    favouriteActivity
}: ActivityDetailsProps) => {
    const tags = activity.tags.split(', ');
    const iconCount = ["", "", ""];

    return (
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
                    onClick={onClick}
                    className='absolute right-4 bottom-5 scale-125'
                    src={favouriteActivity ? heartBlue : heartWhite}
                    alt='Hart icoon'
                />
            </div>
        </div>
    );
}
  
export default ActivityDetails;