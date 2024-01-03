<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    <div class="cards">
      <div class="card" v-for="livro in livros" :key="livro.id" @click="irParaLivros(livro)">
        <img :src="`${caminhoImagem}${livro.imagem}`" alt="">
        <h1>{{ livro.titulo }}</h1>
        <h2>{{ livro.autor }}</h2>
        <h3>{{ livro.classificacao }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ILivro from '@/interfaces/ILivro';
import store from '@/store';


export default defineComponent({
  name: 'HomeView',
  components: {

  },
  setup() {
    const router = useRouter()
    const livros = ref<ILivro[]>([])
    const caminhoImagem = 'http://localhost:3000/'
    const loading = ref(true)

    onMounted(async () => {
      try {
        await store.dispatch('carregaLivros')
        livros.value = store.state.livros
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    })

    const irParaLivros = async (livro: ILivro) => {
      try {
        router.push({name: 'CardComponent', params: {id: livro.id}})
      } catch (error) {
        console.log(error)
      }
   
    }
    return {
      livros,
      loading,
      caminhoImagem,
      irParaLivros
    }
  }
});
</script>


<style scoped lang="scss">
.container {
  padding-top: 50px;
  box-sizing: border-box;
  .cards {
    margin-top: 40px;
    color: black;
    .card {
      display: flex;
      flex-direction: column;
      padding: 15px;
      margin: 15px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      h1 {
        margin-top: 20px;
        padding-left: 25px;
  
      }
      h2 {
        padding-left: 25px;

      }
      h3 {
        padding-left: 25px;
      }
      img {
        width: 300px;
        height: 500px;
      }
      button {
        width: 60%;
        margin: auto;
        justify-content: center;
        height: 40px;
        border-radius: 5px;
        margin-bottom: 15px;
        margin-top: 30px;
        background-color: rgb(10, 108, 255);
        border: none;
        color: rgba(236, 236, 236, 0.863);
        font-weight: 100;

        cursor: pointer;
        transition: 1s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .loading {
    display: flex;
    justify-content: center;
    margin-top: 5em;
    text-align: center;

 
    height: 100%;
    .icon {
      color: rgb(10, 108, 255);
      font-size: 20vw;
      animation: animacao 2s linear infinite;
      transform-origin: center;
    }

    @keyframes animacao {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}

@media (min-width: 360px) {
  .container {
    max-width: 100%;
    margin-left: 10px;
    h1 {
      font-size: 2.3em;
    }
    .cards {
      display: flex;
      flex-direction: column;
    }
  }
}

@media (min-width: 414px) {
  .container {
    margin: auto;
    justify-content: center;
    max-width: 80%;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 95%;
    margin: auto;
    h1 {

    }
    .cards {
      display: flex;
      justify-content: left;
      flex-direction: row;
      flex-wrap: wrap;
      .card {
        width: 300px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 100%;
    margin-left: 15px;
    .cards {
      .card {
        width: 400px;
        img {
          width: 400px;
          height: 600px;
        }
      }
    }
  }
}


</style>