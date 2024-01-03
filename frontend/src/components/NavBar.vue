<template>
    <header class="navbar">
        <nav>
            <div class="titulo">
                <p>
                    Minha Livraria
                </p>
            </div>
            <div class="links">
                <router-link to="/">
                    Inicio
                </router-link>
                <router-link to="/livros/adicionaLivro">
                    Adicionar Livro
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NavBar"
})

</script>

<style scoped lang="scss">
.navbar {
    width: 100%;

    nav {
        width: 100vw;
        display: flex;
        background-color: #002a66;
        justify-content: space-between;
        align-items: center;
        font-size: 20pt;
        height: 10vh;
        color: white;
        .titulo {
            display: flex;
            align-items: center;
            padding: 0 15px;
            p {
                margin-right: 5px;
            }
        }
        .links {
            display: flex;
            gap: 15px;
            padding: 0 15px;
            a {
                display: flex;
                text-decoration: none;
                color: inherit;
                transition: 1s;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}

@media (min-width: 360px) {
  .navbar {
    nav {
      font-size: 0.9rem;
    }
  }
}

@media (min-width: 768px) {
  .navbar {
    nav {
      font-size: 1.7rem;
    }
  }
}
</style>