import React from 'react';
import { ISelectRadioProps } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';
import { borderColor } from '../../utils';

export default function MySelect({ error, register, values }: ISelectRadioProps) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor="select">Choose your favorit</label>
      <select
        {...register('rating', {
          required: 'Choose something',
        })}
        id="select"
        className={`cursor-pointer border-blue-500 border-2 font-bold
          py-1 px-4 rounded-full focus:outline-none ${borderColor(!!error)}`}
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        {values.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <ErrorMessage error={!!error}>{error?.message}</ErrorMessage>
    </div>
  );
}
