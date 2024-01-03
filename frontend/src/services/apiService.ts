import api from '../config'

export const pegaTodosOsLivros = async () => {
  try {
    const response = await api.get("/livros");
    const data = response.data;
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const pegaUmLivro = async (id: number) => {
  try {
    const response = await api.get(`livros/${id}`)
    const data = response.data;
    return data;
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const apiService = {
  pegaTodosOsLivros,
  pegaUmLivro
};
