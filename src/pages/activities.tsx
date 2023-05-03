import Header from '@/components/Header';
import Map from '@/components/Map'

export default function Activities() {
    return (
        <main>
            <Header
                info={true}
                rightAlt='Navigatie naar Belangrijke informatie'
            />

            <Map />
        </main>
    )
}
