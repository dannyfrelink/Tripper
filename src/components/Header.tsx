import Image from 'next/image';
import airplaneIcon from "../svg/airplane-icon.svg";
import infoIcon from "../svg/info-icon.svg";
import checkIcon from "../svg/check.svg";
import backArrowIcon from "../svg/back-arrow.svg";
import pencilIcon from "../svg/pencil.svg";

interface HeaderProps {
    airplane?: boolean;
    info?: boolean;
    rightAlt: string;
    check?: boolean;
    backArrow?: boolean;
    pencil?: boolean;
    leftAlt?: string;
    onSubmit?: () => void;
}

const Header = ({
    airplane = false,
    info = false,
    rightAlt = '',
    check = false,
    backArrow = false,
    pencil = false,
    leftAlt = '',
    onSubmit
}: HeaderProps) => (
    <header className='flex items-center justify-center w-screen h-[72px]'>
        {
            check &&
                <Image
                    className='left-6 absolute'
                    src={checkIcon}
                    alt={leftAlt}
                    onClick={onSubmit}
                />
        }

        {
            backArrow || pencil ?
                <a className='left-6 absolute' href='/activities'>
                    <Image
                        src={backArrow ? backArrowIcon : pencilIcon}
                        alt={leftAlt}
                    />
                </a>
                : ''
        }

        <h1 className='text-2xl font-bold text-primary-dark'>
            Tripper
        </h1>

        {
            airplane || info ?
                <a href={airplane ? "/activities" : "/info"} className='right-7 absolute'>
                    <Image
                        className='scale-[1.3]'
                        src={airplane ? airplaneIcon : info && infoIcon}
                        alt={rightAlt}
                    />
                </a>
                : ''
        }

    </header>
);
  
export default Header;