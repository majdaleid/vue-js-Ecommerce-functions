
<template>
    <h1>Products</h1>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">

            <ProductCart v-for="(product, index) in inventory.slice(0, 8)" :key="product.id" class="card" :index="index"
                :product="product" :addToCart="addToCart" @update-quantity="updateQuantity" />

        </div>
    </main>
</template>


<script>
import TheWelcome from '../components/TheWelcome.vue'
import food from '../food.json'
import ProductCart from '../components/ProductCart.vue'

export default {
    props: ['inventory', 'addToCart'],
    components: {
        ProductCart
    },
    methods: {
        updateQuantity(index, newQuantity) {
            this.inventory[index].quantity = parseInt(newQuantity);
        }
    }
}

</script>