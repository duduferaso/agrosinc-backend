import {agricultores, criarAgricultor, excluirAgricultor} from './Agricultor.Model';

export default {
  Query: {
    agricultores: async () => {
      return await agricultores();
    },
  },
  Mutation: {
    criarAgricultor: async (_:any, { input }:any) => {
      const agricultor = await criarAgricultor(input);
      return agricultor;
    },
    excluirAgricultor: async (_:any, { id }:any) => {
      const agricultor = await excluirAgricultor(id); // Passe o ID como uma string
      return agricultor;
    },
  },
};
