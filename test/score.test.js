const request = require('pushData');
const app = require('../src/score');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        user: 'precious',
        score: 42,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });
});