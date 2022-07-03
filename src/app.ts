import fastify from 'fastify';
import {Foo, FooSchema, FooSchemaRef} from './schema';

export const build = () => {
  const app = fastify({
    logger: {
      level: 'error',
    },
  });

  app.addSchema(FooSchema);

  app.setErrorHandler(function (err, _request, reply) {
    if ((err as any).serialization) {
      app.log.error({ message: err.message }, 'Serialization error');
    }

    reply.send(err);
  });

  app.get<{ Reply: Foo }>(
    '/',
    {
      schema: {
        response: {
          200: FooSchemaRef,
        },
      },
    },
    (_req, reply) => {
      reply.code(200).send(
        {
          type: 'bar',
        });
    },
  );

  return app;
};
