import React from 'react';
import { Itags } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';

interface ITagProps {
  isError: boolean;
  style: string;
  tagsArr: string[];
}
const Tags = React.forwardRef<Itags, ITagProps>(({ isError, style, tagsArr }, ref) => {
  const { tags } = ref as unknown as Itags;
  return (
    <div>
      <div className="flex gap-3">
        {tagsArr.map((el, index) => (
          <div className={`tag`} key={el}>
            <label>
              <input type="checkbox" name="tags" value={el} ref={tags[index]} />
              <span className={`${style}`}> #{el[0].toUpperCase() + el.slice(1)}</span>
            </label>
          </div>
        ))}
      </div>
      <ErrorMessage error={isError}> Select at least one tag! </ErrorMessage>
    </div>
  );
});

export default Tags;
