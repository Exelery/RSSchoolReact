import { FieldError, Merge, UseFormRegister } from 'react-hook-form';

export type IItem = {
  id: number;
  date: string;
  gender: string;
  title: string;
  rating: string;
  category: string[];
  image: string;
};

export type IFormInput = {
  date: string;
  gender: string;
  title: string;
  rating: string;
  category: string[];
  image: FileList;
};

export type IFormProps = { addCard: (item: IItem) => void };

export interface ErrorProps {
  error: boolean;
  children?: React.ReactNode;
}
interface IDifficultInput {
  values: string[];
  register: UseFormRegister<IFormInput>;
}
export interface ISelectRadioProps extends IDifficultInput {
  error: FieldError | undefined;
}

export interface ITagProps extends IDifficultInput {
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}
