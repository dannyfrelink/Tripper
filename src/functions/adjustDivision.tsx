import { useEffect, useState } from "react";

export default async function adjustDivision (daysPerLocation: any, storedDaysValue: string, selectedLocations: any) {
    const [daysDifference, setDaysDifference] = useState('');

    // If devided days is equal to 0 add 1 day
    const newDaysPerLocation: any = {}
    await Object.keys(daysPerLocation).map((location) => {
      if(daysPerLocation[location] === 0) {
        const newValue = daysPerLocation[location] + 1;
        return newDaysPerLocation[location] = newValue;
      } 
      else {
        return newDaysPerLocation[location] = daysPerLocation[location];
      }
    });

    let totalDividedDays = Object.values(newDaysPerLocation).reduce((a,b) => {
      if(typeof a === 'number' && typeof b === 'number') { return a + b }
    });
    
    // If devided days is more than selected days
    if( typeof totalDividedDays === 'number' && totalDividedDays > Number(storedDaysValue) ) {
      let difference = Math.abs(totalDividedDays - Number(storedDaysValue));

      if( difference === 2 ) {
        if( selectedLocations.includes('Amed') && newDaysPerLocation.Amed > 1 ) {
          newDaysPerLocation.Amed = newDaysPerLocation.Amed - 1;
          useEffect(() => {
            setDaysDifference('Amed');
          }, [])
        }
        else if( selectedLocations.includes('Uluwatu') && newDaysPerLocation.Uluwatu > 1 ) {
          newDaysPerLocation.Uluwatu = newDaysPerLocation.Uluwatu - 1;
          useEffect(() => {
            setDaysDifference('Uluwatu');
          }, [])
        }
        else if( selectedLocations.includes('Ubud') && newDaysPerLocation.Ubud > 1 ) {
          newDaysPerLocation.Ubud = newDaysPerLocation.Ubud - 1;
          useEffect(() => {
          setDaysDifference('Ubud');
        }, [])
        }
        else if( selectedLocations.includes('Nusa') && newDaysPerLocation.Nusa > 1 ) {
          newDaysPerLocation.Nusa = newDaysPerLocation.Nusa - 1;
          useEffect(() => {
            setDaysDifference('Nusa');
          }, [])
        }
        else if( selectedLocations.includes('Canggu') && newDaysPerLocation.Canggu > 1 ) {
          newDaysPerLocation.Canggu = newDaysPerLocation.Canggu - 1;
        }
      }

      totalDividedDays = Object.values(newDaysPerLocation).reduce((a,b) => {
        if(typeof a === 'number' && typeof b === 'number') { return a + b }
      });

      if(typeof totalDividedDays === 'number') {
        difference = Math.abs(totalDividedDays - Number(storedDaysValue));
      }

      if( difference === 1 ) {
        if( selectedLocations.includes('Amed') && daysDifference !== 'Amed' && newDaysPerLocation.Amed > 1 ) {
          newDaysPerLocation.Amed = newDaysPerLocation.Amed - 1
        }
        else if( selectedLocations.includes('Uluwatu') && daysDifference !== 'Uluwatu' && newDaysPerLocation.Uluwatu > 1 ) {
          newDaysPerLocation.Uluwatu = newDaysPerLocation.Uluwatu - 1
        }
        else if( selectedLocations.includes('Ubud') && daysDifference !== 'Ubud' && newDaysPerLocation.Ubud > 1 ) {
          newDaysPerLocation.Ubud = newDaysPerLocation.Ubud - 1
        }
        else if( selectedLocations.includes('Nusa') && daysDifference !== 'Nusa' && newDaysPerLocation.Nusa > 1 ) {
          newDaysPerLocation.Nusa = newDaysPerLocation.Nusa - 1
        }
        else if( selectedLocations.includes('Canggu') && newDaysPerLocation.Canggu > 1 ) {
          newDaysPerLocation.Canggu = newDaysPerLocation.Canggu - 1
        }
      }
    }

    // If devided days is less than selected days
    if( typeof totalDividedDays === 'number' && totalDividedDays < Number(storedDaysValue) ) {
        let difference = Math.abs(Number(storedDaysValue) - totalDividedDays);
  
        if( difference === 2 ) {
          if( selectedLocations.includes('Canggu') ) {
            newDaysPerLocation.Canggu = newDaysPerLocation.Canggu + 1;
            useEffect(() => {
              setDaysDifference('Canggu');
            }, [])
          }
          else if( selectedLocations.includes('Nusa') ) {
            newDaysPerLocation.Nusa = newDaysPerLocation.Nusa + 1;
            useEffect(() => {
              setDaysDifference('Nusa');
            }, [])
          }
          else if( selectedLocations.includes('Ubud') ) {
            newDaysPerLocation.Ubud = newDaysPerLocation.Ubud + 1;
            useEffect(() => {
            setDaysDifference('Ubud');
          }, [])
          }
          else if( selectedLocations.includes('Uluwatu') ) {
            newDaysPerLocation.Uluwatu = newDaysPerLocation.Uluwatu + 1;
            useEffect(() => {
              setDaysDifference('Uluwatu');
            }, [])
          }
          else if( selectedLocations.includes('Amed') ) {
            newDaysPerLocation.Amed = newDaysPerLocation.Amed + 1;
          }
        }
  
        totalDividedDays = Object.values(newDaysPerLocation).reduce((a,b) => {
          if(typeof a === 'number' && typeof b === 'number') { return a + b }
        });
  
        if(typeof totalDividedDays === 'number') {
          difference = Math.abs(Number(storedDaysValue) - totalDividedDays);
        }
  
        if( difference === 1 ) {
          if( selectedLocations.includes('Canggu') && daysDifference !== 'Canggu' ) {
            newDaysPerLocation.Canggu = newDaysPerLocation.Canggu + 1
          }
          else if( selectedLocations.includes('Nusa') && daysDifference !== 'Nusa' ) {
            newDaysPerLocation.Nusa = newDaysPerLocation.Nusa + 1
          }
          else if( selectedLocations.includes('Ubud') && daysDifference !== 'Ubud' ) {
            newDaysPerLocation.Ubud = newDaysPerLocation.Ubud + 1
          }
          else if( selectedLocations.includes('Uluwatu') && daysDifference !== 'Uluwatu' ) {
            newDaysPerLocation.Uluwatu = newDaysPerLocation.Uluwatu + 1
          }
          else if( selectedLocations.includes('Amed') ) {
            newDaysPerLocation.Amed = newDaysPerLocation.Amed + 1
          }
        }
    }

    return newDaysPerLocation;
}