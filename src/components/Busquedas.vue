<template>
  <div>
      <ul>
          <li v-for="(item, index) in traerProductos" :key="index">{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}</li>
      </ul>
  </div>
</template>

<script>
export default {

    name: 'Busquedas',

    computed: {
        // Con la propiedad computada se obtiene la variable actualizada en tiempo real
        traerProductos(){
        return this.$store.getters.stockProductos;
        }
    }
}
</script>

<style>

</style>