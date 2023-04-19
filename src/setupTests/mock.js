export const Morty = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'unknown',
        url: '',
    },
    location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
};
export const Summer = {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: [
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
    ],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
};
export function createFetchResponse(data) {
    return {
        json: () => new Promise((resolve) => resolve(data)),
    };
}
export const mockCharacters = [Morty, Summer];
export const info = {
    count: 2,
    next: 'https://rickandmortyapi.com/api/character?page=2&name=t',
    pages: 1,
    prev: null,
};
export const mockResponse = {
    results: mockCharacters,
    info: info,
};
