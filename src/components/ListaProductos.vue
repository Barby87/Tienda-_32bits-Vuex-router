<template>
  <div class="container">
    
    <div class="my-5">
          <ul>
              <li v-for="(item, index) in stockProductos" :key="index" :style="{backgroundColor: item.color}" class="py-2">{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}} | <button @click.stop="ventaProducto(item)" class="btn btn-light btn-sm">Vender</button></li>
          </ul>
     </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'ListaProductos',

    computed: {
        // Con la propiedad computada se obtiene la variable actualizada en tiempo real
        // traerProductos(){
        //     return this.$store.getters.stockProductos;
        // }

        ...mapGetters(['stockProductos'])
    },
    methods: {
        ventaProducto(producto) {
            // A la action ventaProductoMutation le voy a enviar un producto mediante el dispatch
            this.$store.dispatch('ventaProductoMutation', producto);
        }
    }
}
</script>

<style>

</style>