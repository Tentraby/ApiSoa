import type { Application } from 'express-serve-static-core';
import authRouter from './auth.routes';
import animalRouter from './animal.routes';
import especieRouter from './especie.routes';
import comentarioRouter from './comentario.router';
import calificacionRouter from './calificacion.router';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const routerAPI = (app: Application) => {
  app.use('/auth', authRouter);
  app.use('/animal', animalRouter);
  app.use('/especie', especieRouter);
  app.use('/comentario', comentarioRouter);
  app.use('/calificacion', calificacionRouter);
};

export default routerAPI;
