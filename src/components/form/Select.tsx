import React from 'react';
import ErrorMessage from '../ErrorMessage';

const MySelect = React.forwardRef<HTMLSelectElement, { style: string; isError: boolean }>(
  (props, ref) => {
    return (
      <div>
        <label htmlFor="select">Выберите ваш любимый вкус:</label>
        <select
          defaultValue={''}
          id="select"
          ref={ref}
          className={`cursor-pointer border-blue-500 border-2 font-bold
          py-1 px-4 rounded-full focus:outline-none ${props.style}`}
        >
          <option value="" disabled hidden>
            Choose here
          </option>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
        <ErrorMessage error={props.isError} />
      </div>
    );
  }
);

export default MySelect;
