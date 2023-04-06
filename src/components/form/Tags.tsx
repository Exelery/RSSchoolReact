import React from 'react';
import { borderColor } from '../../utils';
import { ITagProps } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';

export default function Tags({ register, error, values }: ITagProps) {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {values.map((el) => (
          <div className={`tag`} key={el}>
            <label>
              <input
                type="checkbox"
                id="check"
                {...register('category', {
                  required: 'Select at least one tag!',
                })}
                value={el}
              />
              <span className={`${borderColor(!!error)}`}>
                #{el[0].toUpperCase() + el.slice(1)}
              </span>
            </label>
          </div>
        ))}
      </div>
      <ErrorMessage error={!!error}>{error?.message}</ErrorMessage>
    </div>
  );
}
