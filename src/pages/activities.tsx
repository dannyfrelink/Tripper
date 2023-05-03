import Image from 'next/image';
import logo from "../svg/logo.svg";
import infoIcon from "../svg/info-icon.svg";
import airplaneIcon from "../svg/airplane-icon.svg";
import illustration from "../svg/illustration.svg";
import CloudButton from '@/components/CloudButton';


import Header from '@/components/Header';


export default function Activities() {


    return (
        <main>
            <Header
                info={true}
                rightAlt='Navigatie naar Belangrijke informatie'
            />


        </main>
    )
}
