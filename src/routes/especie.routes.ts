import express from 'express';
import especieModel from '../models/especie.model';
import { getParams } from '../utils/rest';

const especieRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
especieRouter.get('/', async (_req, res) => {
  const data = await especieModel.getAll();
  res.send({ results: data });
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
especieRouter.get('/tipo', async (req, res) => {
  const { tipo } = getParams(req.query);
  const data = await especieModel.getAllAnimalBySpecie(tipo);
  res.status(200).send({ results: data });
});

export default especieRouter;
