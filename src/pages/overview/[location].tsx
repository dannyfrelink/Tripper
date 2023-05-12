import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Map from "@/components/Map";
import TravelSchedule from "@/components/TravelSchedule";
import MapLocation from "@/components/MapLocation";
import { useEffect, useState } from "react";

export default function Overview({location}: any) {
    let filteredActivities = [{location: 'test'}];

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageArr = Object.keys(storage);

        const storedActivities = storageArr.filter(a => a.length === 1);
        filteredActivities = location.filter((activity: any) => storedActivities.includes(activity.id.toString()));
    }

    return (
        <main>
            <Header
                info={true}
                rightAlt='Navigeren naar Belangrijke informatie'
                backArrow={true}
                backArrowHref='/overview'
                leftAlt="Vorige pagina"
            />

            <MapLocation 
                location={filteredActivities[0].location}
            />
        </main>
    )
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