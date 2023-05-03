import Image from 'next/image';
import logo from '../svg/logo.svg';
import infoIcon from '../svg/info-icon.svg';
import airplaneIcon from '../svg/airplane-icon.svg';
import illustration from '../svg/illustration.svg';
import CloudButton from '@/components/CloudButton';

export default function Home() {
  return (
    <main
      className='bg-secondary-light h-screen'
    >
      <div className='h-[570px] w-screen absolute bottom-0'>
        <header className='mx-auto w-44'>
          <Image
            className='m-auto scale-110'
            src={logo}
            alt='Tripper logo'
          />

          <p className='text-primary-dark text-xl text-right mt-1'>
            Bali editie
          </p>
        </header>

        <CloudButton
          className='bottom-[350px] left-10'
          href='activities'
          iconClass='left-2'
          icon={airplaneIcon}
          iconAlt='Vliegtuig'
          textClass='left-[35px]'
          text='Reisroute samenstellen'
        />

        <CloudButton
          className='bottom-64 right-10'
          href='info'
          iconClass='left-2.5'
          icon={infoIcon}
          iconAlt='Informatie'
          textClass='left-11'
          text='Belangrijke informatie'
        />

        <Image
          className='w-screen absolute bottom-0'
          src={illustration}
          alt='Illustatie zonnig strand'
        />
      </div>
    </main>
  )
}
