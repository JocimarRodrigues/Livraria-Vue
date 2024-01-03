import { createStore } from "vuex";
import { apiService } from "@/services/apiService";
import ILivro from "@/interfaces/ILivro";

export default createStore({
  state: {
    livros: <ILivro[]>[],
    livro: <ILivro>{},
  },
  getters: {},
  mutations: {
    carregaLivros(state, livros) {
      state.livros = livros;
    },
    carregaLivro(state, livro) {
      state.livro = livro
    }
  },
  actions: {
    async carregaLivros({ commit }) {
      const livros = await apiService.pegaTodosOsLivros();
      commit("carregaLivros", livros);
    },
    async pegalivro({commit}, id) {
      const livro = await apiService.pegaUmLivro(id)
      commit("carregaLivro", livro)
    }
  },
  modules: {},
});
