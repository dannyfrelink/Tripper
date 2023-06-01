import Image from 'next/image';
import airplaneIcon from "../svg/airplane-icon.svg";
import infoIcon from "../svg/info-icon.svg";
import checkIcon from "../svg/check.svg";
import backArrowIcon from "../svg/back-arrow.svg";
import pencilIcon from "../svg/pencil.svg";
import Link from 'next/link';

interface HeaderProps {
    airplane?: boolean;
    airplaneHref?: string;
    info?: boolean;
    rightAlt: string;
    check?: boolean;
    backArrow?: boolean;
    backArrowHref?: string;
    pencil?: boolean;
    leftAlt?: string;
    onSubmit?: (e: any) => void;
}

const Header = ({
    airplane = false,
    airplaneHref = '',
    info = false,
    rightAlt = '',
    check = false,
    backArrow = false,
    backArrowHref = '',
    pencil = false,
    leftAlt = '',
    onSubmit
}: HeaderProps) => (
    <header className='flex items-center justify-center w-screen h-[72px]'>
        {
            check &&
                <Link className='left-6 absolute' href='/overview' onClick={onSubmit}>
                    <Image
                        // className='left-6 absolute'
                        src={checkIcon}
                        alt={leftAlt}
                        // onClick={onSubmit}
                    />
                </Link>
        }

        {
            pencil &&
                <Link className='left-6 absolute' href='/activities'>
                    <Image
                        src={pencilIcon}
                        alt={leftAlt}
                    />
                </Link>
        }

{
            backArrow &&
                <Link className='left-6 absolute' href={backArrowHref}>
                    <Image
                        src={backArrowIcon}
                        alt={leftAlt}
                    />
                </Link>
        }

        <h1 className='text-2xl font-bold text-primary-dark'>
            Tripper
        </h1>

        {
            airplane || info ?
                <Link href={airplane ? airplaneHref : "/info"} className='right-7 absolute'>
                    <Image
                        className='scale-[1.3]'
                        src={airplane ? airplaneIcon : infoIcon}
                        alt={rightAlt}
                    />
                </Link>
                : ''
        }

    </header>
);
  
export default Header;