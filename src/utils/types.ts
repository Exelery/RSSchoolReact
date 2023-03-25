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
  tags: React.RefObject<HTMLInputElement>[];
};
