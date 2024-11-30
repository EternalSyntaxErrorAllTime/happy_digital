type Review = {
    avatarWay: string;
    name: string;
    countStar: number;
    comments: string;
  };
  
export type ReviewsData = {
    [key: string]: Review;
  };
  