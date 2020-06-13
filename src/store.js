import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    totalVentas: 0,
    productos: [
      {codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true"},
      {codigo: "0002", nombre: "Fifa 21", stock: "100", precio: "25000", color: "blue", destacado: "false"},{codigo: "0003", nombre: "Gears of War 4", stock: "100", precio: "15000", color: "green", destacado: "true"},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: "100", precio: "35000", color: "yellow", destacado: "false"},
      {codigo: "0005", nombre: "Bloodborne", stock: "100", precio: "10000", color: "blue", destacado: "false"},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: "100", precio: "20000", color: "red", destacado: "true"},
    ],
    titulo1: '32bits',
    subtitulo1: 'Juegos de PC y consolas'
  },
  getters: {
    stockProductos(state) {
      return state.productos.filter((result) => {
        return result.stock > 0;
      });
    },

    mostrarStockTotal(state) {    
      let stockTotal = 0;
      // Iterando arreglo de productos para obtener una suma total de sus stocks
      for (let obj of state.productos){
        stockTotal += parseInt(obj.stock);
      }
      return stockTotal;
    }    
  },
  
  mutations: {
    // productoVendido es lo que vamos a recibir mediante la acción
    venderProducto(state, productoVendido) {
      // Al objeto productos que está en store le hago un forEach
      state.productos.forEach(producto => {
        if(producto.codigo == productoVendido.codigo){
          producto.stock--;
          // Sumando precio de producto vendido
          state.totalVentas += parseInt(productoVendido.precio);
          // state.stockTotal--;
        }
      });
    }
  },

  actions: {
    ventaProductoMutation(context, productoVendido){
      // A la mutación venderProducto le voy a enviar productoVendido mediante el commit
      context.commit('venderProducto', productoVendido);
    }
  }
});

export default store;
