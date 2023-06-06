import { useState } from 'react';

interface DetailsProps {
    children: React.ReactNode;
    summary: string;
}

const Details = ({
    children,
    summary
}: DetailsProps) => {
    const [detailStatus, setDetailStatus] = useState(false);

    return (
        <div 
            onClick={() => setDetailStatus(!detailStatus)} 
            className={`${detailStatus ? 'border-b-[1px]' : ''} border-primary-light`}
        >
            <div className={`${detailStatus ? '' : 'border-b-[1px]'} flex font-medium w-fit`}>
                <p className='w-6'>{detailStatus ? '-' : '+'}</p>
                <p>{summary}</p>
            </div>

            {
                detailStatus && 
                <div className='font-regular text-sm mt-2.5'>
                    {children}
                </div>
            }
        </div>
    );
}
  
export default Details;