import api from "../config";

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
    const response = await api.get(`livros/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const adicionaLivro = async (dados: FormData) => {
  try {
    const response = await api.post("/livros", dados, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const editaLivro = async (id: number, dados: FormData) => {
  try {
    const response = await api.put(`/livros/${id}`, dados, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const apiService = {
  pegaTodosOsLivros,
  pegaUmLivro,
  adicionaLivro,
  editaLivro
};
