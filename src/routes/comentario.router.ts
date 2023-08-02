import express from 'express';
import commentModel from 'src/models/comentario.model';

const comentarioRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
comentarioRouter.post('/', async (req, res) => {
  const {
    content
  } = req.body;
  const data = await _comentario.default.createComment(content);
  res.status(200).send({
    results: data
  });
});
var _default = comentarioRouter;
exports.default = _default;
