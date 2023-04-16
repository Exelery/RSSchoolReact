import searchReducer, { changeSearchValue } from './searchSlice';
import formReducer, { addItem } from './formSlice';
import { formItem } from '@/tests/mockData';

describe('redux selectors', () => {
  it('should return default value', () => {
    const result = searchReducer(undefined, { type: '' });

    expect(result).toEqual({ value: '' });
  });

  it('should change search ', () => {
    const search = { value: 'string' };
    const action = { type: changeSearchValue.type, payload: search };

    const result = searchReducer({ value: '' }, action);
    expect(result).toEqual(search);
  });
});

describe('test formSlice', () => {
  it('should return default state', () => {
    const result = formReducer(undefined, { type: '' });

    expect(result).toEqual({ items: [] });
  });

  it('should add new item', () => {
    const action = { type: addItem.type, payload: formItem };
    const result = formReducer({ items: [] }, action);
    console.log(result);
    console.log(result.items);
    expect(result.items[0].title).toBe(formItem.title);
  });
});
