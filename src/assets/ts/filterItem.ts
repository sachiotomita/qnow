import sortLikesCount from '@/assets/ts/sortItem.ts';
import filterTest from '@/assets/ts/filterItemTest.ts'

const date: Date = new Date();
const todayYear: number = date.getFullYear();
const todayMonth: string =  ('00' + (date.getMonth() + 1)).slice(-2);
const todayDay: string = ('00' + (date.getDate())).slice(-2);
const todayHour: string = ('00' + (date.getHours())).slice(-2);
const todayMinutes: string = ('00' + (date.getMinutes())).slice(-2);
const today: string = `${todayYear}-${todayMonth}-${todayDay}`;

const beforeDate: Date = new Date();
beforeDate.setDate(beforeDate.getDate() - 1);
const beforeYear: number = beforeDate.getFullYear();
const beforeMonth: string =  ('00' + (beforeDate.getMonth() + 1)).slice(-2);
const beforeDay: string = ('00' + (beforeDate.getDate())).slice(-2);
const beforeHour: string = ('00' + (beforeDate.getHours())).slice(-2);
const beforeMinutes: string = ('00' + (beforeDate.getMinutes())).slice(-2);
const yesterday: string = `${beforeYear}-${beforeMonth}-${beforeDay}`;

export const fulldayFilter = (itemToday: string, itemHour: string, itemMinutes: string): any => {
  if (itemToday === today) {
    return true;
  } else if (itemToday === yesterday) {
    if (itemHour === beforeHour) {
      if (itemMinutes > beforeMinutes) {
        console.log(1);
        return true;
      }
    } else if (itemHour > beforeHour) {
      console.log(2);
      return true;
    } else {
      console.log(3);
      return false
    }
    return false;
  }
}
const filterTag = (items: any): any => {
  filterTest();
  
  const filterItems: any = items.filter((item: {[ key: string ]: any}): any => {
    const itemHour: string = item.created_at.slice(11,13);
    const itemMinutes: string = item.created_at.slice(14,16);
    const itemToday: string = item.created_at.slice(0, 10);
    item.created_at = itemToday;
    
    return (fulldayFilter(itemToday, itemHour, itemMinutes));
  });

  return sortLikesCount(filterItems);
};

export default filterTag;
