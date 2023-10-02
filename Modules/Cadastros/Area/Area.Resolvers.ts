import { criarArea, atualizarArea, excluirArea, buscarAreaPorId, listarAreas} from './Area.Model';
  
  export default {
    Query: {
      areas: async () => {
        return await listarAreas();
      },
      area: async (_: any, { id }: any) => {
        const area = await buscarAreaPorId(id);
        return area;
      },
    },
    Mutation: {
      criarArea: async (_: any, { input }: any) => {
        const area = await criarArea(input);
        return area;
      },
      atualizarArea: async (_: any, { id, input }: any) => {
        const area = await atualizarArea(id, input);
        return area;
      },
      excluirArea: async (_: any, { id }: any) => {
        const area = await excluirArea(id);
        return area;
      },
    },
  };
  