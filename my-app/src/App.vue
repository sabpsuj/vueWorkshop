<template>
  <div id="app">
    <h1>{{ foxTalk }}</h1>
    <products-list 
      @remove-product="onRemoveProduct($event)"
      :items="items"
      :remove-button-label="removeButtonLabel"
    ></products-list>
    <add-product
    :button-label="buttonLabel"
    @add-product="onAddProduct($event)"
    >
    </add-product>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import ProductsList from './components/ProductsList.vue';
import AddProduct from './components/AddProduct.vue';

export default {
  name: 'app',
  components: {
    ProductsList,
    AddProduct
  },
  data() {
        return {
  items:[
          {
              id: 0,
              name: 'Łosoś'
          },
          {
              id: 1,
              name: 'Pstrąg'
          },
          {
              id: 2,
              name: 'Flądra'
          },
          {
              id: 3,
              name: 'Szprot'
          }
      ],
      buttonLabel: 'Dodaj Rybę',
      removeButtonLabel: 'X',
      foxTalk: 'What does the fox say?'
      }
  },
  mounted() {

  },
methods: {
    onAddProduct(newItem) {
      this.items.push(newItem);
    },
    onRemoveProduct(item) {
      this.items.splice(item.indexOf, 1);
    }
  }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
