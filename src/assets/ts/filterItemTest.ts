import {fulldayFilter} from '@/assets/ts/filterItem.ts';

const monthArray: string[] = ['05', '06'];
const dayArray: string[] = ['28', '29', '30', '31'];

const filterTest = (): void => {
  monthArray.forEach((month): void => {
    dayArray.forEach((day): void => {
      for (let i=0;i<=24;i++) {
        for (let j=0;j<=60;j++) {
          let date: string = `2019-${month}-${day}`;
          if (fulldayFilter(date, String(i), String(j))) {
            console.log(`${date}-${i}-${j}: true`);
          } else {
          }
        }
      }
    })
  })
}
export default filterTest;
