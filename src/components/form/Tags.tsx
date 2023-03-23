import React from 'react';
import { Itags } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';

const Tags = React.forwardRef<Itags, { isError: boolean; style: string }>((props, ref) => {
  const { tagStyle, tagBussines, tagLife, tagHome } = ref as unknown as Itags;
  const refs = [tagHome, tagLife, tagBussines, tagStyle];
  const tags = ['home', 'life', 'bussines', 'style'];
  return (
    <div>
      <div className="flex gap-3">
        {tags.map((el, index) => (
          <div className={`tag ${el}`} key={el}>
            <label>
              <input type="checkbox" name="tags" value={el} ref={refs[index]} />
              <span className={`${props.style}`}> #{el[0].toUpperCase() + el.slice(1)}</span>
            </label>
          </div>
        ))}
      </div>
      <ErrorMessage error={props.isError} />
    </div>
  );
});

export default Tags;
