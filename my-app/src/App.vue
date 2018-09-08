<template>
  <div id="app">
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}
            <button @click="removeItem(item.id)">{{removeButtonLabel}}</button>
        </li>
    </ul>
    <button @click="addNew">{{buttonLabel}}</button>
    <form @submit.prevent="onSubmit()">
      <input id="fishInput" type="text"/>
    </form>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      items:[
            {
                id: 0,
                buttonId: 0,
                name: 'Łosoś'
            },
            {
                id: 1,
                buttonId: 1,
                name: 'Pstrąg'
            },
            {
                id: 2,
                buttonId: 2,
                name: 'Flądra'
            },
            {
                id: 3,
                buttonId: 3,
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
              this.items.push({id: 4, name: newFish})
          },
          removeItem(el) {
              this.items.splice(el, 1);
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
