import Header from '@/components/Header';
import Map from '@/components/Map';
import Tabs from '@/components/Tabs';
import ActivityCard from '@/components/ActivityCard';
import DaysInput from '@/components/DaysInput';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Activities({activities}: any) {
    const [days, setDays] = useState("");
    const [daysError, setDaysError] = useState(false);
    const [selected, setSelected] = useState(false);
    const selectedActivities: number[] = [];
    const tabs: string[] = [
        "Strand", "Natuur", "Cultuur",
        "Watervallen", "Kinderen", "Uitzichtpunt",
        "Actief", "Uitgaan", "Watersport"
    ];
    const [activeTab, setActiveTab] = useState("Strand");
    const router = useRouter();

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageValues = Object.keys(storage).filter(a => a.length === 1);
        const daysStorage = Object.keys(storage).filter(a => a === "days");

        storageValues.map(value => selectedActivities.push(Number(value)));

        useEffect(() => {
            daysStorage &&
                setDays(storage[daysStorage[0]])

            selectedActivities.length > 0 ?
                setSelected(true) :
                setSelected(false)
        }, [])
    }

    const [locationStatus, setLocationStatus] = useState(false);
    let selectedLocations: string[] = [];
    selectedActivities.map(id => {
        const location = activities[id].location;

        selectedLocations.push(location);
    });

    const handleTab = (tab: string) => {
        setActiveTab(tab);
    }

    const handleFavourite = (id: number) => {
        const index = selectedActivities.indexOf(id);

        selectedActivities.indexOf(id) === -1 ? 
            selectedActivities.push(id) :
            selectedActivities.splice(index, 1);
        
        selectedLocations = [];
        selectedActivities.map(id => {
            let location = activities[id].location;

            selectedLocations.push(location);
        });
        
        selectedActivities.length > 0 ?
            setSelected(true) :
            setSelected(false)

        localStorage.clear();
        selectedActivities.map(activity => localStorage.setItem(activity.toString(), activity.toString()));
    }

    useEffect(() => {
        setLocationStatus(!locationStatus)
    }, [selectedLocations]);

    const handleSubmit = () => {
        if(days && Number(days) > 0 && Number(days) <= 60) {
            localStorage.setItem("days", days);

            router.push('/overview');
        } else {
            setDaysError(true);
        }
    }
    
    return (
        <main>
            <div className='fixed bg-primary-light z-10 before:absolute before:bottom-0 before:left-[calc(100vw/12*0.5)] before:w-[calc(100vw/12*11)] before:h-[1px] before:bg-primary-dark before:opacity-20'>
                <Header
                    info={true}
                    rightAlt='Navigatie naar Belangrijke informatie'
                    check={selected && true}
                    leftAlt="Selectie afronden"
                    onSubmit={handleSubmit}
                />

                <DaysInput 
                    onChange={(e) => {
                        setDays(e.target.value);
                        setDaysError(false);
                    }}
                    days={days}
                    daysError={daysError}
                />

                <Map
                    locations={selectedLocations}
                />

                <Tabs 
                    onClick={(tab) => handleTab(tab)}
                    tabs={tabs}
                    activeTab={activeTab}
                />
                
            </div>

            <div className='pt-[395px] pb-4'>
                {activities.map((activity: any) => {
                    const tags = activity.tags.split(', ');
                    
                    return tags.includes(activeTab) &&
                        <ActivityCard
                            onClick={(id) => handleFavourite(id)}
                            activity={activity}
                        />
                })}
            </div>
        </main>
    );
}

// Fetching local activities json
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'activities.json');
    const jsonData = await fsPromises.readFile(filePath);
    const activities = JSON.parse(jsonData.toString());
  
    return {
      props: {
        activities: activities.attractions
      }
    }
}