<template>
    <form @submit.prevent="onSubmit()">
      <input 
        name="item" 
        v-model="newProduct.name"
        v-validate="'required:true'"
        type="text"/>
      <button>{{buttonLabel}}</button>
    </form>
</template>

<script>
import uuid from 'uuid/v4';

export default {
    name: 'AddProduct',
    props: {
        buttonLabel: String
    },
    data() {
      return {
        newProduct: {
          name: ''
        }
    }
    },
    methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
      if (!result) {
        return;
      }
      this.$emit('add-product', {
          id: uuid(), 
          ...this.newProduct
          });
      this.newProduct.name = '';
      this.$validator.reset();
      });
    }
    }
}
</script>

<style scoped>

</style>