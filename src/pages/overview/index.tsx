import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Map from "@/components/Map";
import TravelSchedule from "@/components/TravelSchedule";
import adjustDivision from "@/functions/adjustDivision";
import numberToWords from "@/functions/numberToWords";
import { useEffect, useState } from "react";

interface ObjectType {
  [location: string]: number;
} 

interface ObjectTypeText {
  [location: string]: string;
}

interface Activity {
  id: number,
  name: string,
  image: {
      src: string,
      alt: string
  },
  tourism: number,
  price: number,
  tags: string,
  location: string,
  href: string,
  details: string
};

interface ObjectTypeArray {
  [location: string]: Activity[];
}

export default function Overview({activities}: any) {
  const [loading, setLoading] = useState(true);

  let storedDaysValue: string = '';
  let selectedLocations: string[] = [];
  let daysPerLocation: ObjectType = {};
  let newDaysPerLocation: ObjectType = {};
  let daysInTextPerLocation: ObjectTypeText = {};
  let activitiesPerLocation: ObjectTypeArray = {};

  if (typeof window !== 'undefined') {
    const storage = { ... localStorage };
    const storageArr = Object.keys(storage);

    const storedActivities = storageArr.filter(a => a.length <= 2);
    const filteredActivities = activities.filter((activity: any) => storedActivities.includes(activity.id.toString()));
    selectedLocations = filteredActivities.map((activity: any) => activity.location);
    const activityCount = selectedLocations.length;

    const uniqueLocations = [...new Set(selectedLocations)];
    const map: ObjectType = { Canggu: 1, Ubud: 2, Amed: 3, Nusa: 4, Uluwatu: 5 };
    uniqueLocations.sort((x, y) => map[x] - map[y]);

    const storedDaysKey = storageArr.filter(a => a === 'days');
    storedDaysValue = storage[storedDaysKey[0]];

    uniqueLocations.map((location: string) => {
      activitiesPerLocation[location] = filteredActivities.filter((activity: any) => activity.location === location);

      daysPerLocation[location] = Math.round(selectedLocations.filter((a:any) => a === location).length / activityCount * Number(storedDaysValue));
    });

    adjustDivision(daysPerLocation, storedDaysValue, selectedLocations).then(a => Object.keys(a).map(b => newDaysPerLocation[b] = a[b]));
  }

  useEffect(() => {
    Object.keys(newDaysPerLocation).map((location: string) => {
      daysInTextPerLocation[location] = numberToWords(newDaysPerLocation[location] > 1 ? newDaysPerLocation[location] - 1 : newDaysPerLocation[location]);

      localStorage.setItem(location, newDaysPerLocation[location].toString());
    });

    localStorage.setItem('daysPerLocation', JSON.stringify(newDaysPerLocation));
  }, [newDaysPerLocation]);

  useEffect(() => {
    let generatedTextPerLocation: ObjectTypeText = {};

    Object.keys(daysInTextPerLocation).map(async (location) => {
      const activities = activitiesPerLocation[location].map(activity => activity.name);

      if(localStorage.getItem(`${location}-content`) === null) {
        let generatedText = await fetch('/api/generateDaySchedule', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: `Maak een reisroute voor ${daysInTextPerLocation[location]} dagen met enkel deze activiteiten in lopende tekst: ${activities.join(", ")}. Er mogen geen andere activiteiten bijkomen. Splits de dagen op in aparte alinea's en begin iedere alinea met welke dag dit is.`
          })
        }).then(res => res.json());

        generatedTextPerLocation[`${location}-content`] = generatedText.text;

        if(Object.keys(generatedTextPerLocation).length === Object.keys(daysInTextPerLocation).length) {
          Object.keys(generatedTextPerLocation).map(location => {
            localStorage.setItem(location, generatedTextPerLocation[location]);
            setLoading(false);
          });
        }
      } else {
        setLoading(false);
      }
    });
  }, [daysInTextPerLocation]);

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
              route={true}
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