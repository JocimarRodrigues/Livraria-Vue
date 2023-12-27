<template>
  <div class="cards" v-for="livro in livros" :key="livro.id">
    <h1>{{ livro.titulo }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { apiService } from '@/api/services';
import ILivro from '@/interfaces/ILivro';



export default defineComponent({
  name: 'HomeView',
  components: {

  },
  setup() {
    const livros = ref<ILivro[]>([])
    const livrosCarregados = ref(false)

    onMounted(async () => {
      try {
        livros.value = await apiService.pegaTodosOsLivros()
        livrosCarregados.value = true
      } catch (error) {
        console.log(error)
      }
    })
    console.log(livros)
    return {
      livros
    }
  }
});
</script>
