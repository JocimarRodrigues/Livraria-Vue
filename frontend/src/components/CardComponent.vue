<template>
    <div class="container" @="livro" v-if="livro">
        <div class="card">
            <img :src="`${caminhoDaImagem}${livro.imagem}`" alt="">
            <h1>Titulo: {{ livro.titulo }}</h1>
            <h2>Autor: {{ livro.autor }}</h2>
            <h3> <EstrelasComponent :total-estrelas="livro.classificacao"/></h3>
        </div>
        <div class="conteudo">
            <h1>Review</h1>
            <p>{{ livro.resenha }}</p>
            <button @click="editarLivro">Editar</button>
            <button @click="excluirLivro">Excluir</button>
        </div>
    </div>
</template>

<script lang="ts">
import ILivro from '@/interfaces/ILivro'
import { apiService } from '@/services/apiService'
import store from '@/store'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EstrelasComponent from './EstrelasComponent.vue'
export default defineComponent({
    name: 'CardComponent',
    setup() {
        const livro = ref<ILivro>();
        const caminhoDaImagem = "http://localhost:3000/";
        const livroId = ref();
        const route = useRoute();
        const router = useRouter();
        onMounted(async () => {
            livroId.value = route.params.id;
            await store.dispatch('pegalivro', livroId.value);
            livro.value = store.state.livro;
        });
        const editarLivro = () => {
            router.push("/livros/editaLivro");
        };
        const excluirLivro = async () => {
            await apiService.excluirLivro(livroId.value);
            alert("Livro excluido com sucesso!");
            router.push("/");
        };
        return {
            livro,
            caminhoDaImagem,
            editarLivro,
            excluirLivro
        };
    },
    components: { EstrelasComponent }
})


</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
    margin-top: 30px;

    .card {
        width: auto;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
            rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
            rgba(0, 0, 0, 0.07) 0px 16px 16px;

        padding: 10px;
        margin: 15px;

        img {
            width: 23vw;
            height: 50vh;
        }

        h2 {
            color: rgb(129, 127, 127);
        }
    }

    .conteudo {
        margin: 0 40px 0 40px;

        h1 {
            font-size: 3.5rem;
        }

        button {
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            height: 1.5em;
            width: 6em;
            cursor: pointer;
            font-size: 1.2rem;
            margin-top: 15px;
            margin-right: 15px;
            margin-bottom: 15px;
        }

        .editar {
            transition: 1s;

            &:hover {
                color: white;
                background-color: blue;
            }
        }

        .excluir {
            transition: 1s;

            &:hover {
                color: white;
                background-color: red;
            }
        }
    }
}

@media (min-width: 360px) and (max-width:425px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .card {
            width: auto;

            img {
                width: 90vw;
            }
        }

        .conteudo {
            h1 {
                font-size: 2.7em;
            }
        }
    }
}</style>