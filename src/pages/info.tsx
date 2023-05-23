import Header from '@/components/Header';
import Details from '@/components/Details';
import { useEffect, useState } from 'react';

export default function Info() {
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
                    <Details
                        summary='Regelen voor vertrek'
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>

                    <Details
                        summary='Verkeer op Bali'
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>

                    <Details
                        summary="Risico's op Bali"
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>

                    <Details
                        summary='Praktische zaken'
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>

                    <Details
                        summary='Gezondheidszaken'
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>

                    <Details
                        summary='In geval van nood'
                    >
                        A common form of Lorem ipsum reads:
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Details>
                </div>
            </section>
        </main>
    );
}
