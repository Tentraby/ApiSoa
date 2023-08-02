import Calificacion from '@models/calificacion';

export default {
  createCalificacion: async (calificacion: number) => {
    try {
      const nuevaCalificacion = await Calificacion.create({ calificacion });
      return nuevaCalificacion;
    } catch (error) {
      return { error };
    }
  },
};
