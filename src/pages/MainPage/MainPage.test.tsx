import { describe, test, expect, vi } from 'vitest';
import { IResponse, ICharacter } from '@/api/types';

global.fetch = vi.fn();

function createFetchResponse(data: IResponse<ICharacter>) {
  return {
    json: () => new Promise((resolve) => resolve(data)),
  };
}

describe('makes a GET request to fetch todo list and returns the result', async () => {
  it('should return ');
  const todoListResponse = [
    {
      title: 'Unit test',
      done: false,
    },
  ];
});
