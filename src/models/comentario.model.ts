import Comment from '@models/comentario';
export default {
  createComment: async (content: string) => {
    try {
      const nuevaComentario = await Comment.create({ content });
      return nuevaComentario;
    } catch (error) {
      return { error };
    }
  },
};
