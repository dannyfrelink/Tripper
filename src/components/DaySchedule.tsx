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
    let buttonLocations: string[] = [];

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const daysPerLocation = JSON.parse(storage["daysPerLocation"]);
        let locations: string[] = [];
        Object.keys(daysPerLocation).map(location => locations.push(location))

        let buttonLocationsIndex: number[] = [];
        locations.map((loc, index) =>
            loc === location &&
                buttonLocationsIndex.push(index - 1) + 
                buttonLocationsIndex.push(index + 1)
        )

        buttonLocationsIndex.map((index, i) =>
            index >= 0 && index < locations.length &&
                buttonLocations.push(`${i === 0 ? 'left' : 'right'}: ${locations[index]}`)
        )
    }

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

            <div className='flex'>
                {
                    buttonLocations.map((location, index) => {
                        const indicator = location.split(': ')[0];
                        const loc = location.split(': ')[1];

                        return (
                        <a
                            key={index}
                            className={`block w-fit text-primary-light border-[1px] rounded-md text-sm py-0.5 px-1.5 mt-3 ${indicator === 'left' ? 'mr-auto' : 'ml-auto'}`}
                            href={`/overview/${loc.toLowerCase()}`}
                        >
                            {indicator === 'left' && '<-'} {loc} {indicator === 'right' && '->'}
                        </a>
                        )
                    })
                }
            </div>
        </div>
    );
}
  
export default DaySchedule;