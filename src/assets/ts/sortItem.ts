const sortLikesCount = (items: any): any => {
  items.sort((a:{likes_count: number},b: {likes_count: number}) => {
    if (a.likes_count < b.likes_count) return 1;
    if (a.likes_count > b.likes_count) return -1;
    return 0;
  });
  return items;
};

export default sortLikesCount;
