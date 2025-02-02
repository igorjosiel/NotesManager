import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

import { DB } from '../database';

export async function notesRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const notes = await DB.select().from('notes');
  
    return {
      notes,
    };
  });

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const createNotesSchema = z.object({
      title: z.string(),
      content: z.string(),
    });

    const { title, content } = createNotesSchema.parse(request.body);
    
    await DB('notes').insert({ id: randomUUID(), title, content });

    return reply.status(201).send();
  });

  app.get('/:id', async (request: FastifyRequest) => {
    const getNoteParamsSchema = z.object({
      id: z.string().uuid(),
    });
    
    const { id } = getNoteParamsSchema.parse(request.params);

    const note = await DB('notes').where({ id }).first();
		
    return {
      note,
    }
  });
}
