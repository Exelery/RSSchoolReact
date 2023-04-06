export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: ILocation; // Name and link to the character's origin location.
  location: ILocation; // Name and link to the character's last known location endpoint.
  image: string; //
  episode: string[]; //List of episodes in which this character appeared.
  url: string; //Link to the character's own URL endpoint.
  created: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IInfo {
  count: number;
  next: string;
  pages: number;
  prev: null | number;
}

export interface IResponse<T> {
  info: IInfo;
  results: T;
  error?: string;
}
