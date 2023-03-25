import React from 'react';
import { Itags } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';

const Tags = React.forwardRef<Itags, { isError: boolean; style: string }>((props, ref) => {
  const { tags } = ref as unknown as Itags;
  const tagsMap = ['home', 'life', 'bussines', 'style'];
  return (
    <div>
      <div className="flex gap-3">
        {tagsMap.map((el, index) => (
          <div className={`tag`} key={el}>
            <label>
              <input type="checkbox" name="tags" value={el} ref={tags[index]} />
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
