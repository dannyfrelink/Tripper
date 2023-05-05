import Header from '@/components/Header';
import Map from '@/components/Map';
import Tabs from '@/components/Tabs';
import ActivityCard from '@/components/ActivityCard';

export default function Activities({activities}: any) {
    const selectedActivities: number[] = [];

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageValues = Object.keys(storage).filter(a => a.length === 1);

        storageValues.map(value => selectedActivities.push(Number(value)));
    }

    const handleFavourite = (id: number) => {
        const index = selectedActivities.indexOf(id);

        selectedActivities.indexOf(id) === -1 ? 
            selectedActivities.push(id) :
            selectedActivities.splice(index, 1);

        localStorage.clear();
        selectedActivities.map(activity => localStorage.setItem(activity.toString(), activity.toString()));
    }
    
    return (
        <main>
            <div className='fixed bg-primary-light z-10'>
                <Header
                    info={true}
                    rightAlt='Navigatie naar Belangrijke informatie'
                />

                <Map />
            </div>

            {/* Padiding top aanpassen tot zichtbaar onder kaart */}
            <div className='pt-80'>
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