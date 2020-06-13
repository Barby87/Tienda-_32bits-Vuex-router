<template>
  <div class="container">
    <h1 class="title text-center">Busqueda</h1>
    <br>
    <div class="container">
        <div class="input-group mb-3">  
            <input type="text" class="form-control" placeholder="Buscar por código" aria-label="Buscar por código" aria-describedby="button-addon2" v-model="buscando" @keyup.enter="filtrado">
            <div class="input-group-append">
                <button class="btn btn-primary" id="button-addon2" @click.prevent="filtrado">Buscar</button>
            </div>
        </div>

        <table class="table table-striped container" v-if="showResult">
                <thead>
                    <tr>
                        <th>Código producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{result.codigo}}</td>
                        <td>{{result.nombre}}</td>
                        <td>{{result.precio}}</td>
                        <td>{{result.stock}}</td>
                    </tr>
                </tbody>
            </table>
    </div>

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
          <th>{{mostrarStockTotal}}</th>
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
        data() {
            return {
                buscando: '',
                result: '',
                showResult: false,
            }
        },
        components: {
            ListaProductos
        },
         computed: {
        ...mapGetters(['stockProductos', 'mostrarStockTotal']),
        },
        methods: {
            filtrado() {
                const resultado = this.$store.state.productos.find( item => item.codigo == this.buscando );
                this.result = resultado;
                this.showResult = true;
            }
        }
    }
</script>

<style>

</style>