import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { DB } from '../database';

export async function notesRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const notes = await DB.select().from('notes');
  
    return {
      notes,
    };
  });

  // app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const { title, content } = request.body;
  //   console.log(title, content);
  // });
}
