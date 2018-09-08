<template>
  <div id="app">
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}
            <button @click="removeItem(item.id)">{{ removeButtonLabel }}</button>
        </li>
    </ul>
    
    <form @submit.prevent="onSubmit()">
      <input 
        name="item" 
        id="fishInput" 
        v-validate="'required:true'"
        type="text"/>
      <button>{{buttonLabel}}</button>
    </form>
    
  </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'app',
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
        removeButtonLabel: 'X'
        }
      },
      methods: {
          addNew() {
              let newFish = document.getElementById('fishInput').value;
              this.items.push({id: uuid(), name: newFish});
              newFish.name = ''
          },
          removeItem(el) {
              this.items.splice(el, 1);
          },
          onSubmit() {
            this.$validator.validateAll().then(result => {
            if (!result) {
              return;
            }
            this.addNew();
            this.$validator.reset();
            });
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
