import { FieldError, Merge, UseFormRegister } from 'react-hook-form';

export interface IFormInput {
  date: string;
  gender: string;
  title: string;
  rating: string;
  category: string[];
  image: FileList;
}
type Modify<T, R> = Omit<T, keyof R> & R;

export type IItem = Modify<
  IFormInput,
  {
    id: string;
    image: string;
  }
>;

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
