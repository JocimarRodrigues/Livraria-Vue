<template>
    <div class="container">
        <h2>Adicionar Livro</h2>
    </div>
    <FormComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormComponent from './FormComponent.vue';

export default defineComponent({
    name: 'AdicionaLivroComponent',
    components: { FormComponent }
})
</script>

<style scoped lang="scss">
.container {
    margin-top: 15px;
    text-align: center;
}
</style>