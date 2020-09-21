import {
  pushData, getData, userscore, username,
} from '../src/score';

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

  expect(fetch).toHaveBeenCalledTimes(1);
});


describe('order by score', () => {
  test('it should return high score', () => {
    const results = [{ user: 'lui', score: 40 }, { user: 'tem', score: 50 }];
    expect(userscore(results)).toBe(`<p>${50}</p><p>${40}</p>`);
  });
});

describe('score will not be saved without a score', () => {
  test('it should return undefined', () => {
    const results = [{ user: 'lui' }, { user: 'tem' }];
    expect(userscore(results)).toBe(`<p>${'undefined'}</p><p>${'undefined'}</p>`);
  });
});

describe('return user with higher score', () => {
  test('it should return high score', () => {
    const results = [{ user: 'lui', score: 40 }, { user: 'tem', score: 50 }];
    expect(username(results)).toBe(`<p>${'tem'}</p><p>${'lui'}</p>`);
  });
});

describe('score will not be saved without a name', () => {
  test('it should return undefined', () => {
    const results = [{ score: 40 }, { score: 50 }];
    expect(username(results)).toBe(`<p>${'undefined'}</p><p>${'undefined'}</p>`);
  });
});