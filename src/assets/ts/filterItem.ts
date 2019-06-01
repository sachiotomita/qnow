import sortLikesCount from '@/assets/ts/sortItem.ts';

const date: Date = new Date();
const year: number = date.getFullYear();
const month: string =  ('00' + (date.getMonth() + 1)).slice(-2);
const day: string = ('00' + (date.getDate())).slice(-2);
const hour: string = ('00' + (date.getHours())).slice(-2);
const minutes: string = ('00' + (date.getMinutes())).slice(-2);
const today: string = `${year}-${month}-${day}-${hour}-${minutes}`;

const beforeDate: Date = new Date();
beforeDate.setDate(beforeDate.getDate() - 1);
const beforeYear: number = beforeDate.getFullYear();
const beforeMonth: string =  ('00' + (beforeDate.getMonth() + 1)).slice(-2);
const beforeDay: string = ('00' + (beforeDate.getDate())).slice(-2);
const beforeHour: string = ('00' + (beforeDate.getHours())).slice(-2);
const beforeMinutes: string = ('00' + (beforeDate.getMinutes())).slice(-2);
const yesterday: string = `${beforeYear}-${beforeMonth}-${beforeDay}-${beforeHour}-${beforeMinutes}`;

const filterTag = (items: any): any => {
  const filterItems: any = items.filter((item: {[ key: string ]: any}): any => {
    console.log(`${today}:${yesterday}`);
    item.created_at = item.created_at.slice(0, 10);
    return (item.created_at === today);
  });
  return sortLikesCount(filterItems);
};

export default filterTag;
