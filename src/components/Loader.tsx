import Image from 'next/image';
import loadingIcon from '../svg/loading.svg';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center font-medium text-center text-primary-dark h-screen w-9/12 mx-auto before:absolute before:inset-0 before:bg-secondary-light before:z-[-1]'>
            <Image
                src={loadingIcon}
                alt='Airplane loading icon'
            />
            <p className='mt-10 mb-4'>
                Momenteel wordt jouw persoonlijke rondreis in elkaar gezet. Even geduld alsjeblieft.
            </p>
            <a
                className='block w-fit text-[15px] bg-primary-light border-[1px] border-primary-dark rounded-md py-0.5 px-3'
                href='/activities'
            >
                Afbreken
            </a>
        </div>
    );
}
  
export default Loader;