<template>
  <div class="container">
      <ul>
          <li v-for="(item, index) in productos" :key="index" :style="{backgroundColor: item.color}">{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}</li>
      </ul>
  </div>
</template>

<script>
    import {mapState} from 'vuex';

export default {
    name: 'Busquedas',

    computed: {
        // Con la propiedad computada se obtiene la variable actualizada en tiempo real
        // traerProductos(){
        //     return this.$store.getters.stockProductos;
        // }

        ...mapState(['productos'])
    }
}
</script>

<style>

</style>