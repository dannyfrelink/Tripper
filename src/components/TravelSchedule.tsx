interface TravelScheduleProps {
    storedDaysValue: string;
    // schedule: Array[]
}

const TravelSchedule = ({
    storedDaysValue,
    // schedule
}: TravelScheduleProps) => {
    return (
        <div className="text-primary-light bg-secondary-dark rounded-xl w-11/12 mx-auto mt-8 py-5 px-7">
        <h3 className="font-semibold">
          Reisroute {storedDaysValue} dagen
        </h3>

        <ol className="[&>*]:mt-3 list-decimal list-inside">
          <li className="border-b-[1px] w-fit">Uluwatu (3 dagen)</li>
          <li className="border-b-[1px] w-fit">Canggu (5 dagen)</li>
          <li className="border-b-[1px] w-fit">Ubud (7 dagen)</li>
          <li className="border-b-[1px] w-fit">Amed (5 dagen)</li>
        </ol>
      </div>
    );
}
  
export default TravelSchedule;