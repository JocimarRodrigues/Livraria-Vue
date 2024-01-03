<template>
    <div class="container">
        <h2>Editar Livro</h2>
        <FormComponent :livroProps="livro" @limpaLivroProps="limpaProps"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FormComponent from './FormComponent.vue';
import ILivro from '@/interfaces/ILivro';
import store from '@/store';

export default defineComponent({
    name: 'EditaLivroComponent',
    components: { FormComponent },
    setup() {
        const livro = ref<ILivro>()
        livro.value = store.state.livro
        const caminhoImagem = `http://localhost:3000/${livro.value.imagem}`
        livro.value.imagem = caminhoImagem
        const limpaProps = () => {
            livro.value = undefined
        }
        return {
            livro,
            limpaProps
        }
    }
})
</script>

<style scoped lang="scss">
    .container {
        margin-top: 15px;
        text-align: center;
    }
</style>