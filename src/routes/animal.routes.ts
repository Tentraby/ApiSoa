import express from 'express';
import animalModel from '../models/animal.model';
import { getParams } from '../utils/rest';

const animalRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
animalRouter.get('/', async (req, res) => {
  const { id } = getParams(req.query);
  const data = await animalModel.getAll(id);
  res.send(data);
});

export default animalRouter;
