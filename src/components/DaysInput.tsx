interface DaysInputProps {
    onChange: (e: any) => void;
    days: string;
    daysError: boolean;
}

const DaysInput = ({
    onChange,
    days,
    daysError
}: DaysInputProps) => (
    <div className='flex items-center text-primary-dark w-11/12 mx-auto mb-3.5'>
        <label className='text-sm mr-2' htmlFor="dagen">Aantal dagen:</label>
        <input
            value={days}
            onChange={onChange}
            className='bg-primary-light text-xs border-[1px] border-primary-dark w-28 rounded-[5px] px-1 py-0.5 focus:outline-secondary-light'
            type="number"
            placeholder='Lengte rondreis'
        />

        {
            daysError &&
                <p className='text-red-500 text-xs ml-2'>Getal van 7 t/m 60</p>
        }
    </div>
);

export default DaysInput;