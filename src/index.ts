import { build } from './app';

(async () => {
  const app = build();
  await app.ready();

  app.listen({ port: 3000 });
})();
