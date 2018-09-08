<template>
    <div>
        <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}
            <button @click="removeProduct(item)">{{ removeButtonLabel }}</button>
        </li>
        <p v-if="!items.length">No Fishes anymore!</p>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: {
        items: Array,
        removeButtonLabel: String
    },
    methods: {
        removeProduct(item) {
            this.$emit('remove-product', item)
        }
    }
    
}
</script>

<style scoped>
</style>