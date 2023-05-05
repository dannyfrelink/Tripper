import Header from '@/components/Header';
import Map from '@/components/Map';
import Tabs from '@/components/Tabs';
import ActivityCard from '@/components/ActivityCard';

export default function Activities({activities}: any) {
    const [days, setDays] = useState("");
    const [daysError, setDaysError] = useState(false);
    const [selected, setSelected] = useState(false);
    const selectedActivities: number[] = [];

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

    const handleFavourite = (id: number) => {
        const index = selectedActivities.indexOf(id);

        selectedActivities.indexOf(id) === -1 ? 
            selectedActivities.push(id) :
            selectedActivities.splice(index, 1);
        
        selectedActivities.length > 0 ?
            setSelected(true) :
            setSelected(false)

        localStorage.clear();
        selectedActivities.map(activity => localStorage.setItem(activity.toString(), activity.toString()));
    }

    const handleSubmit = () => {
        if(days && Number(days) > 0 && Number(days) <= 60) {
            localStorage.setItem("days", days);
        } else {
            setDaysError(true);
        }
    }
    
    return (
        <main>
            <div className='fixed bg-primary-light z-10'>
                <Header
                    info={true}
                    rightAlt='Navigatie naar Belangrijke informatie'
                    check={selected && true}
                    leftAlt="Selectie afronden"
                    onSubmit={handleSubmit}
                />

                <div className='flex items-center text-primary-dark w-11/12 mx-auto mb-3'>
                    <label className='text-sm mr-2' htmlFor="dagen">Aantal dagen:</label>
                    <input
                        value={days}
                        onChange={(e) => {
                            setDays(e.target.value);
                            setDaysError(false);
                        }}
                        className='bg-primary-light text-xs border-[1px] border-primary-dark w-28 rounded-[5px] px-1 py-0.5 focus:outline-secondary-light'
                        type="number"
                        placeholder='Lengte rondreis'
                    />

                    {
                        daysError &&
                            <p className='text-red-500 text-xs ml-2'>Getal van 1 t/m 60</p>
                    }
                </div>

                <Map />

                
            </div>

            {/* Padiding top aanpassen tot zichtbaar onder kaart */}
            <div className='pt-[450px] pb-4'>
                {activities.map((activity: any) => 
                    <ActivityCard
                        onClick={(id) => handleFavourite(id)}
                        activity={activity}
                    />
                )}
            </div>

            <Tabs>

            </Tabs>
        </main>
    );
}

// Fetching local activities json
import fsPromises from 'fs/promises';
import path from 'path';
import { useEffect, useState } from 'react';

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