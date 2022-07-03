import { FastifyInstance } from 'fastify';
import { build } from '../app';

describe('root path', () => {
  let server: FastifyInstance;
  beforeAll(async () => {
    server = build();

    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('it should return a 200', async () => {
    const response = await server.inject({
      path: '/',
    });

    expect(response.statusCode).toBe(200);
  });
});
