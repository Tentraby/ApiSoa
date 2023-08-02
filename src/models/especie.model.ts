import Alimentacion from '@models/alimentacion';
import Animal from '@models/animal';
import Especie from '@models/especie';
import Habitat from '@models/habitat';
import Imagen from '@models/imagen';
import Origen from '@models/origen';
import Riesgo from '@models/riesgo';
import TipoReproduccion from '@models/tipo_reproduccion';
import sequelize from '../database/index';

export default {
  getAll: async () => {
    try {
      return await Especie.findAll();
    } catch (error) {
      return { error };
    }
  },
  getAllAnimalBySpecie: async (tipoSpecie: string) => {
    try {
      const data = await Animal.findAll({
        attributes: [
          [sequelize.col('Animal.id'), 'id'],
          [sequelize.col('Imagens.link'), 'imagen'],
          [sequelize.col('nombre'), 'nombre'],
          [sequelize.col('scientific_name'), 'scientific_name'],
          [sequelize.col('Origen.origen'), 'origen'],
          [sequelize.col('Habitat.habitat'), 'habitat'],
          [sequelize.col('Riesgo.nivel'), 'riesgo'],
          [sequelize.col('tamanio'), 'tamanio'],
          [sequelize.col('TipoReproduccion.tipo'), 'reproduccion'],
          [sequelize.col('Alimentacion.alimentacion'), 'alimentacion'],
          [sequelize.col('descripcion'), 'descripcion'],
          [sequelize.col('link_video'), 'video'],
          [sequelize.col('link_map'), 'mapa'],
          [sequelize.col('link_audio'), 'audio'],
          [sequelize.col('link_gif'), 'gif'],
          [sequelize.col('Especie.tipo'), 'especie'],
        ],
        include: [
          {
            model: Especie,
            attributes: [],
          },
          {
            model: Riesgo,
            attributes: [],
          },
          {
            model: TipoReproduccion,
            attributes: [],
          },
          {
            model: Alimentacion,
            attributes: [],
          },
          {
            model: Origen,
            attributes: [],
          },
          {
            model: Habitat,
            attributes: [],
          },
          {
            model: Imagen,
            attributes: [],
          },
        ],
        where: {
          '$Especie.tipo$': tipoSpecie,
        },
      });
      return data;
    } catch (error) {
      return { error };
    }
  },
};
