import Header from '@/components/Header';
import MapLocation from '@/components/MapLocation';
import DaySchedule from '@/components/DaySchedule';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ObjectTypeText {
    [location: string]: string;
} 

export default function Overview({location, locationArrival}: any) {
    const router = useRouter();
    const [activityLoad, setActivityLoad] = useState(false);
    let filteredActivities = [];
    let daysForLocation;
    let daySchedule;
    let daySchedulePerDay: ObjectTypeText = {};

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageArr = Object.keys(storage);

        const storedActivities = storageArr.filter(a => a.length <= 2);
        filteredActivities = location.filter((activity: any) => storedActivities.includes(activity.id.toString()));

        const storedDaysPerLocation = localStorage.getItem('daysPerLocation');
        const daysPerLocationObject = storedDaysPerLocation !== null && JSON.parse(storedDaysPerLocation);
        daysForLocation = daysPerLocationObject[filteredActivities[0].location];

        daySchedule = storage[`${filteredActivities[0].location}-content`];
        const dayScheduleClean = daySchedule.replaceAll(':','').replaceAll('-','');

        for (let i = 1; i < daysForLocation; i++) {
            const scheduleSplit1 = dayScheduleClean.split(`Dag ${i}`);
            const scheduleSplit2 = scheduleSplit1[1].split(`Dag ${i + 1}`);

            daySchedulePerDay[`Dag ${i + 1}`] = scheduleSplit2[0].replaceAll(i, i+1)
        }
    }

    useEffect(() => {
        setActivityLoad(true)
    }, [filteredActivities]);

    return (
        <main>
            <Header
                info={true}
                rightAlt='Navigeren naar Belangrijke informatie'
                backArrow={true}
                backArrowHref='/overview'
                leftAlt='Vorige pagina'
            />

            <MapLocation 
                activities={filteredActivities}
                location={location[0].location.toLowerCase()}
            />

            <div className='text-primary-light bg-secondary-dark shadow-subtle w-11/12 m-auto rounded-xl p-7 mt-7'>
                <h2 className='font-semibold text-lg'>
                    {activityLoad && filteredActivities[0].location} {activityLoad && daysForLocation} dagen
                </h2>

                {
                    activityLoad &&
                        <DaySchedule
                            location={filteredActivities[0].location}
                            locationArrival={locationArrival}
                            daySchedulePerDay={daySchedulePerDay}
                            onClickSwitch={async (e) => {
                                await router.push(`/overview/${e.target.id}`);
                                router.reload();
                            }}
                        />
                }
            </div>
        </main>
    );
}

// Fetching local activities json
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const json = JSON.parse(jsonData.toString());
    const activities = json.attractions;
  
    const paths = activities.map((activity: any) => ({
        params: { location: activity.location.toLowerCase() },
    }))
  
    return { paths, fallback: false }
}

// Filter out current activity & fetch locationArrival JSON
export async function getStaticProps({params}: any) {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const json = JSON.parse(jsonData.toString());
    const activities = json.attractions;

    const filePathArrival = path.join(process.cwd(), 'locationArrival.json');
    const jsonDataArrival = await fsPromises.readFile(filePathArrival);
    const jsonArrival = JSON.parse(jsonDataArrival.toString());

    return {
        props: {
            location: activities.filter((activity: any) => 
                activity.location.toLowerCase() === params.location
            ),
            locationArrival: jsonArrival[params.location]
        }
    }
}