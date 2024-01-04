<template>
    <div class="container">
        <h2>Adicionar Livro</h2>
    </div>
    <FormComponent :tipo-formulario-props="'adicionar'"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormComponent from './FormComponent.vue';

export default defineComponent({
    name: 'AdicionaLivroComponent',
    components: { FormComponent },
    setup() {
        const tipoFormularioProps = ''
        return {
            tipoFormularioProps
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