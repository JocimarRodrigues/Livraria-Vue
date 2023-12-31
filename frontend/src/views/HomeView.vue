<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    <div class="cards">
      <div class="card" v-for="livro in livros" :key="livro.id">
        <h1>{{ livro.titulo }}</h1>
        <h2>{{ livro.autor }}</h2>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ILivro from '@/interfaces/ILivro';
import store from '@/store';

export default defineComponent({
  name: 'HomeView',
  components: {

  },
  setup() {
    const livros = ref<ILivro[]>([])
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
    return {
      livros,
      loading
    }
  }
});
</script>
