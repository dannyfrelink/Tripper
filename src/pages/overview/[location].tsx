import Header from '@/components/Header';
import MapLocation from '@/components/MapLocation';
import { useEffect, useState } from 'react';

interface ObjectTypeText {
    [location: string]: string;
} 
  

export default function Overview({location}: any) {
    const [activityLoad, setActivityLoad] = useState(false);
    let filteredActivities: ObjectTypeText[] = [];
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
    }, [daySchedulePerDay]);

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
                location={activityLoad ? filteredActivities[0].location : 'Nusa'}
            />

            <div className='text-primary-light bg-secondary-dark shadow-subtle w-11/12 m-auto rounded-xl p-7 mt-7'>
                <h2 className='font-semibold text-lg'>
                    {activityLoad && filteredActivities[0].location} {activityLoad && daysForLocation} dagen
                </h2>

                {
                    activityLoad &&
                        <DaySchedule
                            location={filteredActivities[0].location}
                            daySchedulePerDay={daySchedulePerDay}
                        />
                }
            </div>
        </main>
    )
}

// Fetching local activities json
import fsPromises from 'fs/promises';
import path from 'path';
import Details from '@/components/Details';
import DaySchedule from '@/components/DaySchedule';

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

// Filter out current activity
export async function getStaticProps({params}: any) {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const json = JSON.parse(jsonData.toString());
    const activities = json.attractions;

    return {
        props: {
            location: activities.filter((activity: any) => 
                activity.location.toLowerCase() === params.location
            )
        }
    }
}