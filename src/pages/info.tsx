import Header from '@/components/Header';
import Details from '@/components/Details';
import { useEffect, useState } from 'react';

export default function Info({information}: any) {
    const [routeCreated, setRouteCreated] = useState(false);

    if (typeof window !== 'undefined') {
        const storage = { ... localStorage };
        const storageArr = Object.keys(storage);
    
        useEffect(() => {
            storageArr.map(value =>
            value.includes('-content') &&
                setRouteCreated(true)
            );
        }, []);
    }

    return (
        <main>
            <Header
                airplane={true}
                airplaneHref={routeCreated ? '/overview' : '/activities'}
                rightAlt='Navigeer naar Reisroute samenstellen'
            />
            
            <section className='text-primary-light bg-secondary-dark shadow-subtle w-11/12 m-auto rounded-xl p-7'>
                <h2 className='font-semibold'>
                    Belangrijke informatie Bali
                </h2>

                <div className='[&>*:first-of-type]:mt-5 [&>*]:mt-3'>
                    {information.map((info: any, index: number) => {
                        const details = Object.entries(info).filter(i =>
                            i[0].includes('details')
                        );

                        return (
                            <Details summary={info.summary} key={index}>
                                <div className='[&>div>p]:mb-1.5 [&>div:not(:last-of-type)]:mb-3.5'>
                                    {details.map((detail, index) => {
                                        const title = detail[1].split('<title>')[1];
                                        const content = detail[1].split('//').slice(1);

                                        return (
                                            <div key={index}>
                                                <h3 className='font-semibold mb-0.5'>
                                                    {index + 1}. {title}
                                                </h3>

                                                {content.map((text: string, index: number) =>
                                                    <p key={index}>
                                                        {text}
                                                    </p>    
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </Details>
                        )
                    })}
                </div>
            </section>
        </main>
    );
}

// Fetching local importantInfo json
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'importantInfo.json');
    const jsonData = await fsPromises.readFile(filePath);
    const importantInfo = JSON.parse(jsonData.toString());
  
    return {
      props: {
        information: importantInfo.info
      }
    }
}