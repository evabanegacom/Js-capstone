import { pushData, getData } from '../src/score';




describe('GET / ', () => {
  test('It should return status code', async () => {
    const response = await getData({ user: 'Ellie', score: 200 });
    expect(response.body).toEqual(['Elie', 200]);
    expect(response.statusCode).toBe(200);
  });
});