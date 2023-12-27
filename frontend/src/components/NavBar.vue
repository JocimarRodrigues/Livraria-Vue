<template>
    <header class="navbar">
        <nav>
            <div class="avmb">

            </div>
        </nav>
        <div class="links">
            <router-link to="/">
                Inicio
            </router-link>
        </div>
        <router-link to="/novoLivro">
            Adicionar Livro
        </router-link>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "NavBar"
    })

</script>
