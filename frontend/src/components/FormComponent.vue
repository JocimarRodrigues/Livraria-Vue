<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="infos">
                <input type="text" name="titulo"
                    :placeholder="livroProps ? `${livroProps.titulo}` : 'Digite um título para o livro'"
                    v-model="livro.titulo" required />
                <input type="text" name="autor"
                    :placeholder="livroProps ? `${livroProps.autor}` : 'DIgite um nome para o autor'"
                    v-model="livro.autor" required/>
                <input type="number" name="classificacao"
                    :placeholder="livroProps ? `${livroProps.classificacao}` : 'Dê uma nota de 1 a 5 para o livro.'"
                    v-model="livro.classificacao" required/>
            </div>
            <div class="imagem">
                <img :src="livro.imagemUrl" alt="" class="" v-if="livroProps">
                <img src="../assets/no-image.png" alt="" v-else>
                <input type="file" name="imagem" id="fileInput" placeholder="Selecione uma imagem"
                    @change="onInputChange($event)" required/>
                <label for="fileInput">Escolher arquivo</label>
            </div>
            <h1>Review</h1>
            <div class="resenha">
                <textarea name="resenha" id="" cols="30" rows="10" class="resenha"></textarea>
            </div>
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from 'vue';
import { apiService } from "@/services/apiService";

export default defineComponent({
    name: 'FormComponent',
    props: {
        livroProps: Object
    },
    setup(props, { emit }) {

        const livro = ref({
            titulo: '',
            autor: '',
            classificacao: 0,
            imagem: null as File | null,
            imagemUrl: ''


        })

        onMounted(() => {
            if (props.livroProps?.imagem) {
                console.log(props.livroProps.imagem)
                livro.value.imagemUrl = props.livroProps.imagem
            }
        })

        const onSubmit = async () => {
            const formData = new FormData()
            formData.append("titulo", livro.value.titulo)
            formData.append("autor", livro.value.autor)
            formData.append("classificacao", livro.value.classificacao.toString())
            formData.append("imagem", livro.value.imagem as File)
            await apiService.adicionaLivro(formData)
        }
        const onInputChange = (e: Event) => {
            const data = e.target as HTMLInputElement

            if (data.files) {
                livro.value.imagem = data.files[0];
                livro.value.imagemUrl = URL.createObjectURL(data.files[0]);

            }

        }
        onUnmounted(() => {
            emit('limpraLivroProps', null)

        })

        return {
            livro,
            onSubmit,
            onInputChange
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100vw;
    height: 90vh;

    h1 {
        margin: 15px 0 15px 0;

    }

    form {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .infos {
            width: 100%;
            margin: 15px;
            display: grid;
            grid-template-columns: 2;
            grid-template-rows: 2;
            gap: 15px;

            :nth-child(1) {
                grid-column: 1;
            }

            :nth-child(2) {
                grid-column: 1;
            }

            :nth-child(3) {
                grid-column: 2;
                grid-row: 1;
            }

            input {
                width: 300px;
                height: 40px;
                border-radius: 15px;
                padding: 5px;
            }
        }

        .imagem {
            width: 100%;
            display: flex;
            margin: 15px;
            justify-content: center;
            align-items: center;

            img {
                width: 30vw;
            }

            label {
                margin-left: 15px;
                background-color: #3498db;
                color: #fff;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                display: inline-block;
            }

            input[type="file"] {
                display: none;
                opacity: 0;
                cursor: pointer;
            }
        }

        .resenha {
            margin: 15px;
            width: 100%;
            display: flex;
            justify-content: center;

            textarea {
                display: flex;
                width: 80%;
                border-radius: 10px;
                padding: 15px;
            }
        }



        button {
            margin-top: 15px;
            width: 200px;
            height: 40px;
            font-size: 13pt;
            border: none;
            border-radius: 15px;
            cursor: pointer;

            &:hover {
                transition: 1s;
                color: white;
                background-color: #002a66;
            }
        }
    }
}

@media (min-width: 360px) and (max-width: 425px) {
    .container {
        text-align: center;
        display: flex;

        form {
            .infos {
                display: flex;
                flex-direction: column;

                input {
                    padding-left: 20px;
                    width: 300px;
                }
            }
        }

        .resenha {
            textarea {
                padding: 0;
            }
        }
    }
}
</style>