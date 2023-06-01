import Link from "next/link";

interface ActivityDetailsContentProps {
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
}

const ActivityDetailsContent = ({
    activity
}: ActivityDetailsContentProps) => {

    return (
        <div className='text-primary-dark text-[15px] w-11/12 mx-auto px-3.5 [&>*:not(:first-of-type)]:mt-2.5 my-6'>
        {activity.details.split('//').map((paragraph, index) => 
            <p key={index}>{paragraph}</p>
        )}

        <Link className='block w-fit text-[15px] border-[1px] border-primary-dark rounded-md py-0.5 px-1.5 mt-4' href="/activities">
            Verder zoeken
        </Link>
    </div>
    );
}
  
export default ActivityDetailsContent;