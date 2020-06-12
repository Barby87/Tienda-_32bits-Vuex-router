<template>
  <div class="container">
    <lista-productos></lista-productos>
    <h3>Cantidad de juegos totales registrados: {{stockProductos.length}}</h3>
    <br>
    <h3>Stock por producto:</h3>

    <table class="table table-striped container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for para propiedad computada traerProductos -->
        <!-- <tr v-for="(item, index) in traerProductos" :key="index">  -->
        
        <!-- Con mapGetters -->
        <tr v-for="(item, index) in stockProductos" :key="index"> 
          <td>{{item.nombre}}</td>
          <td>{{item.stock}}</td>
        </tr>
        <tr>
          <th>STOCK TOTAL DE PRODUCTOS</th>
          <td>{{stockTotal}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
    import ListaProductos from '@/components/ListaProductos.vue';
    import {mapGetters} from 'vuex';

    export default {
        name: 'Busquedas',
        components: {
            ListaProductos
        },
         computed: {
        ...mapGetters(['stockProductos', 'stockTotal']),
        }
    }
</script>

<style>

</style>