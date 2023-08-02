"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
// Ajusta la ruta de importación para usar './comentario.model'
var _comentario = _interopRequireDefault(require("./comentario.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const comentarioRouter = _express.default.Router();

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

