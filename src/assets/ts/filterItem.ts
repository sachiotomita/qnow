import sortLikesCount from '@/assets/ts/sortItem.ts';

const date: Date = new Date();
const year: number = date.getFullYear();
const month: string =  ('00' + (date.getMonth() + 1)).slice(-2);
const day: string = ('00' + (date.getDate())).slice(-2);
const today: string = `${year}-${month}-${day}`;

const filterTag = (items: any): any => {
  const filterItems: any = items.filter((item: any): any => {
    item.created_at = item.created_at.slice(0, 10);
    return (item.created_at === today);
  });
  return sortLikesCount(filterItems);
};

export default filterTag;
