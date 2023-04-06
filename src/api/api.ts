import { ICharacter, IResponse } from './types';
import fetch from 'cross-fetch';

const API = 'https://rickandmortyapi.com/api/character';

export async function getCharacters(value = '') {
  const url = new URL(API);
  url.search = new URLSearchParams({ name: value }).toString();
  try {
    const answer = await fetch(url);
    const response: IResponse<ICharacter[]> = await answer.json();
    if (response.error) {
      throw Error;
    }
    return response.results;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getCharacterById(id: number) {
  try {
    const answer = await fetch(`${API}/${id}`);
    const response: ICharacter = await answer.json();
    // console.log('json test', response);
    if (!response.id) {
      throw Error;
    }
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
}
