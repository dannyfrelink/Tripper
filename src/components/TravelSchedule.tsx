interface TravelScheduleProps {
    storedDaysValue: string;
    daysPerLocation: {[key: string]: number};
}

const TravelSchedule = ({
    storedDaysValue,
    daysPerLocation
}: TravelScheduleProps) => {
    return (
        <div className="text-primary-light bg-secondary-dark rounded-xl w-11/12 mx-auto mt-8 py-5 px-7 shadow-subtle">
            <h3 className="font-semibold">
                Reisroute {storedDaysValue} dagen
            </h3>

            <ol className="[&>*]:mt-3 list-decimal list-inside">
                {Object.keys(daysPerLocation).map(location => 
                    <a className="block border-b-[1px] w-fit" href={`overview/${location.toLowerCase()}`}>
                        <li>
                            {location} ({daysPerLocation[location]} dagen)
                        </li>
                    </a>
                )}
            </ol>
        </div>
    );
}
  
export default TravelSchedule;