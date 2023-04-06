import { describe, expect } from 'vitest';
import { getCharacterById, getCharacters } from './api';
import { mockCharacters, Morty, Summer } from '../../setupTests/mock';
// import fetch from 'cross-fetch';

describe('getCharacters', () => {
  it('should return an array of characters when called without value', async () => {
    const result = await getCharacters();
    expect(result).toEqual(mockCharacters);
  });

  it('should return filtered  array when called with an valid value', async () => {
    const result = await getCharacters('morty');
    const result2 = await getCharacters('sum');
    expect(result).toEqual([Morty]);
    expect(result2).toEqual([Summer]);
  });

  it('should return an empty array when called with an invalid value', async () => {
    const result = await getCharacters('mortyls');

    expect(result).toEqual([]);
  });
});

describe('test fetch requests', async () => {
  async function checkFetch() {
    return await fetch('https://rickandmortyapi.com/api/character?name=tests').then(async (r) => {
      return {
        status: r.status,
        response: await r.json(),
      };
    });
  }
  it('should return error', async () => {
    const answer = await checkFetch();
    expect(answer.response).toEqual({ error: 'There is nothing here' });
    expect(answer.status).toEqual(404);
  });
});

describe('getCharactersById', () => {
  it('should return an value', async () => {
    const result = await getCharacterById(2);
    expect(result).toEqual(Morty);
  });
  it('should return null', async () => {
    const result = await getCharacterById(10);
    expect(result).toBeNull;
  });
});
