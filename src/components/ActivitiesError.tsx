import Link from "next/link";

interface ActivitiesErrorProps {
    onClickCancel: () => void;
    onClickSubmit: (e:any) => void;
}

const ActivitiesError = ({
    onClickCancel,
    onClickSubmit
}: ActivitiesErrorProps) => (
    <div className='flex justify-center fixed inset-0 bg-secondary-light text-primary-dark text-center font-medium z-10'>
        <div className='w-10/12 m-auto'>
            <p>
                Er zijn meer dagen doorgegeven dan het aantal geselecteerde activiteiten. Het is gebruikelijk om één activiteit per dag te selecteren.
            </p>
            <div className='flex justify-around w-10/12 mx-auto mt-4'>
                <button
                    className='block w-fit text-[15px] bg-primary-light border-[1px] border-primary-dark rounded-md mx-auto py-0.5 px-3 shadow-subtle'
                    onClick={onClickCancel}
                >
                    Afbreken
                </button>

                <Link 
                    href='/overview'
                    className='block w-fit text-[15px] bg-primary-light border-[1px] border-primary-dark rounded-md mx-auto py-0.5 px-3 shadow-subtle'
                    onClick={onClickSubmit}
                >
                    Toch doorgaan
                </Link>
            </div>
        </div>
    </div>
);
  
export default ActivitiesError;