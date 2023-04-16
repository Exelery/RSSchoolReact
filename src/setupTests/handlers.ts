import { mockCharacters, info } from '@/setupTests/mock';
import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || '';
    const filteredMockCharacters = mockCharacters.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    let response, status: number;
    if (filteredMockCharacters.length > 0) {
      response = { info, results: filteredMockCharacters };
      status = 200;
    } else {
      response = { error: 'There is nothing here' };
      status = 404;
    }
    return res(ctx.status(status, 'Mocked status'), ctx.json(response)); // ctx.delay(1500),
  }),

  rest.get('https://rickandmortyapi.com/api/character/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    let response;
    let status;
    if (!Number.isFinite(Number(userId))) {
      response = { error: 'Hey! you must provide an id' };
      status = 500;
    } else {
      const answer = mockCharacters.find((el) => el.id === Number(userId));
      if (answer) {
        response = answer;
        status = 202;
      } else {
        response = { error: 'Character not found' };
        status = 404;
      }
    }
    return res(ctx.status(status, 'Mocked status'), ctx.json(response)); // ctx.delay(1500),
  }),
];
