const NoticiaSemana = require('./Noticia.Model'); // Importe o modelo de dados

export default {
    Query: {
        noticiasemana: async () => {
            return await NoticiaSemana.findAll();
        },
        noticianasemana: async (_:any, { id }:any) => {
            return await NoticiaSemana.findByPk(id);
        },
    },
    Mutation: {
        criarNoticiaSemana: async (_:any, { input }:any) => {
            const noticiaSemana = await NoticiaSemana.create(input);
            return noticiaSemana;
        },
        atualizarNoticiaSemana: async (_:any, { id, input }:any) => {
            await NoticiaSemana.update(input, { where: { id } });
            const noticiaSemana = await NoticiaSemana.findByPk(id);
            return noticiaSemana;
        },
        excluirNoticiaSemana: async (_:any, { id }:any) => {
            const noticiaSemana = await NoticiaSemana.findByPk(id);
            await NoticiaSemana.destroy({ where: { id } });
            return noticiaSemana;
        },
    },
} as any;

