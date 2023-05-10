import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Map from "@/components/Map";
import TravelSchedule from "@/components/TravelSchedule";
import { useEffect, useState } from "react";

interface ObjectType {
  [location: string]: number;
} 

export default function Overview({activities}: any) {
  const [loading, setLoading] = useState(true);

  let storedDaysValue: string = '';
  let selectedLocations: string[] = [];

  if (typeof window !== 'undefined') {
    const storage = { ... localStorage };
    const storageArr = Object.keys(storage);

    const storedActivities = storageArr.filter(a => a.length === 1);
    const filteredActivities = activities.filter((activity: any) => storedActivities.includes(activity.id.toString()));
    selectedLocations = filteredActivities.map((activity: any) => activity.location);
    const activityCount = selectedLocations.length;


    const uniqueLocations = [...new Set(selectedLocations)];
    const daysPerLocation: ObjectType = {};

    const storedDaysKey = storageArr.filter(a => a === 'days');
    storedDaysValue = storage[storedDaysKey[0]];

    uniqueLocations.map((location: any) =>
      daysPerLocation[location] = Math.round(selectedLocations.filter((a:any) => a === location).length / activityCount * Number(storedDaysValue))
    );

    console.log("bli", daysPerLocation)
  }





  useEffect(() => {
    setLoading(false)
  }, [storedDaysValue]);

  return (
    <main>
      { 
        loading &&
          <Loader/>
      }

      {
        !loading &&
          <div>
            <Header
              info={true}
              rightAlt='Navigatie naar Belangrijke informatie'
              pencil={true}
              leftAlt="Selectie aanpassen"
            />

            <Map
              locations={selectedLocations}
            />

            <TravelSchedule 
              storedDaysValue={storedDaysValue}
            />
          </div>
      }
    </main>
  )
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