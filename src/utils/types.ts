export type IItem = {
  id: number;
  date: string;
  gender: string;
  title: string;
  rating: string;
  category: string[];
  image: string;
};

export type Itags = {
  tagHome: React.RefObject<HTMLInputElement>;
  tagStyle: React.RefObject<HTMLInputElement>;
  tagBussines: React.RefObject<HTMLInputElement>;
  tagLife: React.RefObject<HTMLInputElement>;
};
