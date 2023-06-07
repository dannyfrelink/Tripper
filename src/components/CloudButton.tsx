import Image from 'next/image';
import Link from 'next/link';
import cloud from "../svg/cloud.svg";

interface CloudButtonProps {
    className: string;
    href: string;
    iconClass: string;
    icon: any;
    iconAlt: string;
    textClass: string;
    text: string;

}

const CloudButton = ({
    className,
    href,
    iconClass,
    icon,
    iconAlt,
    textClass,
    text
}: CloudButtonProps) => (
    <Link href={href} className={`absolute ${className}`}>
        <Image
            className={`absolute top-[50px] z-[1] scale-110 ${iconClass}`}
            src={icon}
            alt={`${iconAlt} icoon`}
        />

        <p className={`absolute top-6 text-center z-[1] font-semibold text-primary-dark text-[17px] ${textClass}`}>
            {text.split(" ")[0]}
            <br/>
            {text.split(" ")[1]}
        </p>

        <Image
            className='scale-110'
            src={cloud}
            alt="Illustatie wolk als button"
        />
    </Link>
);
  
export default CloudButton;