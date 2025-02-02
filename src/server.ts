import fastify from 'fastify';
import { notesRoutes } from './routes/notes.ts';

const app = fastify();

app.register(notesRoutes, {
  prefix: 'notes',
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('Consegui rodar o Node, sou FODA!');
});
