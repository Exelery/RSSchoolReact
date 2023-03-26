import React from 'react';
import ErrorMessage from '../ErrorMessage';

const MySelect = React.forwardRef<HTMLSelectElement, { style: string; isError: boolean }>(
  (props, ref) => {
    const values = ['Grapefruit', 'Lime', 'Coconut', 'Mango'];
    return (
      <div className="flex flex-col items-start">
        <label htmlFor="select">Choose your favorit</label>
        <select
          defaultValue=""
          id="select"
          ref={ref}
          className={`cursor-pointer border-blue-500 border-2 font-bold
          py-1 px-4 rounded-full focus:outline-none ${props.style}`}
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
        <ErrorMessage error={props.isError} />
      </div>
    );
  }
);

export default MySelect;
