import {criarDadosClimaticos,atualizarDadosClimaticos,excluirDadosClimaticos,buscarDadosClimaticosPorId,listarDadosClimaticos} from './Clima.Model';
  
export default {
    Query: {
      dadosclimaticos: async () => {
        return await listarDadosClimaticos();
      },
      dadosclimatico: async (_: any, { id }: any) => {
        const dadosClimaticos = await buscarDadosClimaticosPorId(id);
        return dadosClimaticos;
      },
    },
    Mutation: {
      criarDadosClimaticos: async (_: any, { input }: any) => {
        const dadosClimaticos = await criarDadosClimaticos(input);
        return dadosClimaticos;
      },
      atualizarDadosClimaticos: async (_: any, { id, input }: any) => {
        const dadosClimaticos = await atualizarDadosClimaticos(id, input);
        return dadosClimaticos;
      },
      excluirDadosClimaticos: async (_: any, { id }: any) => {
        const dadosClimaticos = await excluirDadosClimaticos(id);
        return dadosClimaticos;
      },
    },
};
  