<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="infos">
                <input type="text" name="titulo" placeholder="Digite um titulo" v-model="livro.titulo" />
                <input type="text" name="autor" placeholder="Digite o nome do Autor" v-model="livro.autor"/>
                <input type="number" name="classificacao" placeholder="Dê uma nota de 1 a 5 para o livro." v-model="livro.classificacao"/>
                <input type="file" name="imagem" placeholder="Selecione uma imagem"  @change="onInputChange($event)" />
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
import { defineComponent, ref } from 'vue';
import { apiService } from "@/services/apiService";

export default defineComponent({
    name: 'FormComponent',
    setup() {
        const livro = ref({
            titulo: '',
            autor: '',
            classificacao: 0,
            imagem: null as File | null

        })

 

        const onSubmit = async () => {
            const formData = new FormData()
            formData.append("titulo", livro.value.titulo)
            formData.append("autor", livro.value.autor)
            formData.append("classificacao", livro.value.classificacao.toString())
            formData.append("imagem", livro.value.imagem as File)
            // const livroAdicionado = {
            //     titulo: livro.value.titulo,
            //     autor: livro.value.autor,
            //     classificacao: livro.value.classificacao,
            //     imagem: livro.value.imagem
            // }
            await apiService.adicionaLivro(formData)
        }
        const onInputChange = (e: Event) => {
  
            const data = e.target as HTMLInputElement
     
            if(data.files) {

                livro.value.imagem = data.files[0];
            }
       
  

        }

        return {
            livro,
            onSubmit,
            onInputChange
        }
    }
})
</script>
