import Image from 'next/image';
import loadingIcon from '../svg/loading.svg';
import Details from './Details';

interface DayScheduleProps {
    location: string;
    daySchedulePerDay: {
        [day: string]: string
    };
}

const DaySchedule = ({
    location,
    daySchedulePerDay
}: DayScheduleProps) => {
    return (
        <div className='[&>*:first-of-type]:mt-5 [&>*]:mt-3'>
            <Details summary={`Dag 1: aankomst ${location}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a autem impedit distinctio voluptatum. Voluptatum modi provident molestiae minima necessitatibus. Non, tempore excepturi assumenda architecto sit facilis nesciunt ullam voluptate.
            </Details>
            {
                Object.keys(daySchedulePerDay).map((day, index) => 
                    <Details
                        key={index}
                        summary={`${day}: activiteiten ${day.toLowerCase()}`}
                    >
                        {daySchedulePerDay[day]}
                    </Details>
                )
            }
        </div>
    );
}
  
export default DaySchedule;