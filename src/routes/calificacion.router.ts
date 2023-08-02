import express from 'express';
import CalificacionModel from 'src/models/calificacion.model';

const calificacionRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
calificacionRouter.post('/', async (req, res) => {
  const { calificacion } = req.body;
  const data = await CalificacionModel.createCalificacion(calificacion);
  res.status(200).send({ results: data });
});

export default calificacionRouter;
