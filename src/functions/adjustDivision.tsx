import { useEffect, useState } from "react";

export default function adjustDivision (daysPerLocation: any, storedDaysValue: string, selectedLocations: any) {
    const [daysDifference, setDaysDifference] = useState('');
    let totalDividedDays = Object.values(daysPerLocation).reduce((a,b) => {
        if(typeof a === 'number' && typeof b === 'number') { return a + b }
    });
    
    if( typeof totalDividedDays === 'number' && totalDividedDays > Number(storedDaysValue) ) {
      let difference = Math.abs(totalDividedDays - Number(storedDaysValue));

      if( difference === 2 ) {
        if( selectedLocations.includes('Amed') ) {
          daysPerLocation.Amed = daysPerLocation.Amed - 1;
          useEffect(() => {
            setDaysDifference('Amed');
          }, [])
        }
        else if( selectedLocations.includes('Uluwatu') ) {
          daysPerLocation.Uluwatu = daysPerLocation.Uluwatu - 1;
          useEffect(() => {
            setDaysDifference('Uluwatu');
          }, [])
        }
        else if( selectedLocations.includes('Ubud') ) {
          daysPerLocation.Ubud = daysPerLocation.Ubud - 1;
          useEffect(() => {
          setDaysDifference('Ubud');
        }, [])
        }
        else if( selectedLocations.includes('Nusa') ) {
          daysPerLocation.Nusa = daysPerLocation.Nusa - 1;
          useEffect(() => {
            setDaysDifference('Nusa');
          }, [])
        }
        else if( selectedLocations.includes('Canggu') ) {
          daysPerLocation.Canggu = daysPerLocation.Canggu - 1;
        }
      }

      totalDividedDays = Object.values(daysPerLocation).reduce((a,b) => {
        if(typeof a === 'number' && typeof b === 'number') { return a + b }
      });

      if(typeof totalDividedDays === 'number') {
        difference = Math.abs(totalDividedDays - Number(storedDaysValue));
      }

      if( difference === 1 ) {
        if( selectedLocations.includes('Amed') && daysDifference !== 'Amed' ) {
          daysPerLocation.Amed = daysPerLocation.Amed - 1
        }
        else if( selectedLocations.includes('Uluwatu') && daysDifference !== 'Uluwatu' ) {
          daysPerLocation.Uluwatu = daysPerLocation.Uluwatu - 1
        }
        else if( selectedLocations.includes('Ubud') && daysDifference !== 'Ubud' ) {
          daysPerLocation.Ubud = daysPerLocation.Ubud - 1
        }
        else if( selectedLocations.includes('Nusa') && daysDifference !== 'Nusa' ) {
          daysPerLocation.Nusa = daysPerLocation.Nusa - 1
        }
        else if( selectedLocations.includes('Canggu') ) {
          daysPerLocation.Canggu = daysPerLocation.Canggu - 1
        }
      }
    }

    if( typeof totalDividedDays === 'number' && totalDividedDays < Number(storedDaysValue) ) {
        let difference = Math.abs(Number(storedDaysValue) - totalDividedDays);
  
        if( difference === 2 ) {
          if( selectedLocations.includes('Canggu') ) {
            daysPerLocation.Canggu = daysPerLocation.Canggu + 1;
            useEffect(() => {
              setDaysDifference('Canggu');
            }, [])
          }
          else if( selectedLocations.includes('Nusa') ) {
            daysPerLocation.Nusa = daysPerLocation.Nusa + 1;
            useEffect(() => {
              setDaysDifference('Nusa');
            }, [])
          }
          else if( selectedLocations.includes('Ubud') ) {
            daysPerLocation.Ubud = daysPerLocation.Ubud + 1;
            useEffect(() => {
            setDaysDifference('Ubud');
          }, [])
          }
          else if( selectedLocations.includes('Uluwatu') ) {
            daysPerLocation.Uluwatu = daysPerLocation.Uluwatu + 1;
            useEffect(() => {
              setDaysDifference('Uluwatu');
            }, [])
          }
          else if( selectedLocations.includes('Amed') ) {
            daysPerLocation.Amed = daysPerLocation.Amed + 1;
          }
        }
  
        totalDividedDays = Object.values(daysPerLocation).reduce((a,b) => {
          if(typeof a === 'number' && typeof b === 'number') { return a + b }
        });
  
        if(typeof totalDividedDays === 'number') {
          difference = Math.abs(Number(storedDaysValue) - totalDividedDays);
        }
  
        if( difference === 1 ) {
          if( selectedLocations.includes('Canggu') && daysDifference !== 'Canggu' ) {
            daysPerLocation.Canggu = daysPerLocation.Canggu + 1
          }
          else if( selectedLocations.includes('Nusa') && daysDifference !== 'Nusa' ) {
            daysPerLocation.Nusa = daysPerLocation.Nusa + 1
          }
          else if( selectedLocations.includes('Ubud') && daysDifference !== 'Ubud' ) {
            daysPerLocation.Ubud = daysPerLocation.Ubud + 1
          }
          else if( selectedLocations.includes('Uluwatu') && daysDifference !== 'Uluwatu' ) {
            daysPerLocation.Uluwatu = daysPerLocation.Uluwatu + 1
          }
          else if( selectedLocations.includes('Amed') ) {
            daysPerLocation.Amed = daysPerLocation.Amed + 1
          }
        }
      }
}