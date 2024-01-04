<template>
    <div class="estrelas">
        <img v-for="index in totalEstrelas" :key="index" src="../assets/estrela.png" alt="Estrela">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'EstrelasComponent',
    props: {
        totalEstrelas: {
            type: Number,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.estrelas {
    img {
        width: 2vw;
    }
}

</style>