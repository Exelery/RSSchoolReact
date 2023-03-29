import React from 'react';
import { borderColor } from '../../utils';
import { ISelectRadioProps } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';

export default function RadioBtns({ error, register, values }: ISelectRadioProps) {
  return (
    <div className="switch-field">
      {values.map((el) => (
        <label htmlFor={`switch_${el}`} key={el}>
          <input
            type="radio"
            id={`switch_${el}`}
            value={el}
            {...register('gender', {
              required: true,
            })}
          />
          <span className={`solid border-[1px] cursor-pointer ${borderColor(!!error)}`}>{el}</span>
        </label>
      ))}
      <ErrorMessage error={!!error}> Select one option! </ErrorMessage>
    </div>
  );
}
