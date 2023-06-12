import Link from "next/link";

interface TravelScheduleProps {
    storedDaysValue: string;
}

const TravelSchedule = ({
    storedDaysValue
}: TravelScheduleProps) => {
    let daysPerLocation: any;

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };

        daysPerLocation = storage['daysPerLocation'] !== null && JSON.parse(storage['daysPerLocation']);
    }
    return (
        <div className="text-primary-light bg-secondary-dark rounded-xl w-11/12 mx-auto mt-8 py-5 px-7 shadow-subtle">
            <h3 className="font-semibold">
                Reisroute {storedDaysValue} dagen
            </h3>

            <ol className="[&>*]:mt-3 list-decimal list-inside">
                {Object.keys(daysPerLocation).map((location, index) => 
                    <Link
                        key={index}
                        className="block border-b-[1px] w-fit"
                        href={`overview/${location.toLowerCase()}`}
                    >
                        <li>
                            {location} ({daysPerLocation[location]} {Number(daysPerLocation[location]) > 1 ? 'dagen' : 'dag'})
                        </li>
                    </Link>
                )}
            </ol>
        </div>
    );
}
  
export default TravelSchedule;