import { pushData, getData } from '../src/score';

let result;

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(result),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('it gets users once', async () => {
  /* eslint-disable */

  const rate = await getData();

  // expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});


global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(result[{ user: 'lui', score: 40 }]),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('to send users once', async () => {
  const rate = await pushData('lui', 40);
  /* eslint-enable */

  // expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});