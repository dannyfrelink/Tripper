import Header from '@/components/Header';
import Map from '@/components/Map';
import Tabs from '@/components/Tabs';
import ActivityCard from '@/components/ActivityCard';
import DaysInput from '@/components/DaysInput';
import { useEffect, useState } from 'react';

export default function Activities({activities}: any) {
    const [days, setDays] = useState();
    const [daysError, setDaysError] = useState(false);
    const [activitiesError, setActivitiesError] = useState(false);
    const [selected, setSelected] = useState(false);
    const selectedActivities: number[] = [];
    const tabs: string[] = [
        "Strand", "Natuur", "Cultuur", "Dieren",
        "Waterval", "Kinderen", "Uitzichtpunt",
        "Ontspannen", "Actief", "Uitgaan",
        "Wateractiviteit", "Snorkelen", "Sport"
    ];
    const [activeTab, setActiveTab] = useState("Strand");

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageValues = Object.keys(storage).filter(a => a.length <= 2);
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

    const handleSubmit = (e: any) => {
        // console.log("bli", selectedActivities.length / days)

        if(days && Number(days) >= 7 && Number(days) <= 60) {
            if(selectedActivities.length / days < 1 && !activitiesError) {
                setActivitiesError(true);
                e.preventDefault();
            } else {
                localStorage.setItem("days", Math.round(days).toString());
            }
        } else {
            e.preventDefault();
            setDaysError(true);
        }
    }

    const handleChange = (e: any) => {
        setDays(e.target.value);
        setDaysError(false);

        // localStorage.getItem('Canggu-content') !== null &&
        //     localStorage.removeItem('Canggu-content');

        // localStorage.getItem('Ubud-content') !== null &&
        //     localStorage.removeItem('Ubud-content');

        // localStorage.getItem('Amed-content') !== null &&
        //     localStorage.removeItem('Amed-content');

        // localStorage.getItem('Nusa-content') !== null &&
        //     localStorage.removeItem('Nusa-content');

        // localStorage.getItem('Uluwatu-content') !== null &&
        //     localStorage.removeItem('Uluwatu-content');
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
                    onChange={(e) => handleChange(e)}
                    days={days ? days : ''}
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
                {activities.map((activity: any, index: number) => {
                    const tags = activity.tags.split(', ');
                    
                    return tags.includes(activeTab) &&
                        <ActivityCard
                            key={index}
                            onClick={(id) => handleFavourite(id)}
                            activity={activity}
                        />
                })}
            </div>

            {
                activitiesError &&
                    <div className='flex justify-center fixed inset-0 bg-secondary-light text-primary-dark text-center font-medium z-10'>
                        <div className='w-10/12 m-auto'>
                            <p>
                                Er zijn meer dagen doorgegeven dan het aantal geselecteerde activiteiten. Het is gebruikelijk om 1 activiteit per dag te selecteren.
                            </p>
                            <div className='flex justify-around w-10/12 mx-auto mt-4'>
                                <button
                                    className='block w-fit text-[15px] bg-primary-light border-[1px] border-primary-dark rounded-md mx-auto py-0.5 px-3 shadow-subtle'
                                    onClick={() => setActivitiesError(false)}
                                >
                                    Afbreken
                                </button>

                                <a
                                    href='/overview'
                                    className='block w-fit text-[15px] bg-primary-light border-[1px] border-primary-dark rounded-md mx-auto py-0.5 px-3 shadow-subtle'
                                    onClick={handleSubmit}
                                >
                                    Toch doorgaan
                                </a>
                            </div>
                        </div>
                    </div>
            }
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