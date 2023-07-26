

<template>
  Home

  <div class="recommended">

    <ProductCart v-for="(product, index) in inventory.slice(0, 4)" :key="product.id" class="card" :index="index"
      :product="product" :addToCart="addToCart" @update-quantity="updateQuantity" />
  </div>

  <main class="wrapper">



  </main>
</template>


<script>
import TheWelcome from '../components/TheWelcome.vue'
import food from '../food.json'
import ProductCart from '../components/ProductCart.vue'

export default {
  name: 'Home',
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