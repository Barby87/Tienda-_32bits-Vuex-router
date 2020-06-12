<template>
    <div>
        <h1>{{titulo1}}</h1>
        <h2>{{subtitulo1}}</h2>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'Inicio',

    computed: {
        // mostrarTitulo() {
        //     return this.$store.state.titulo1;
        // },
        // mostrarSubtitulo() {
        //     return this.$store.state.subtitulo1;
        // }

        // LLamando a mapState dentro de propiedad computada
        ...mapState(['titulo1', 'subtitulo1'])

    }
}
</script>
