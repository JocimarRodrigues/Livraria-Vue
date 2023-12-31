import { createStore } from "vuex";
import { apiService } from "@/services/apiService";
import ILivro from "@/interfaces/ILivro";

export default createStore({
  state: {
    livros: <ILivro[]>[],
  },
  getters: {},
  mutations: {
    carregaLivros(state, livros) {
      state.livros = livros;
    },
  },
  actions: {
    async carregaLivros({ commit }) {
      const livros = await apiService.pegaTodosOsLivros();
      commit("carregaLivros", livros);
    },
  },
  modules: {},
});
