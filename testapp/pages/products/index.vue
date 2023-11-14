<template>
    <div>
<div class="grid grid-cols-4 gap-5">
    <div v-for = "product in products">
       <ProductCard :product="product"/>
    </div>
</div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });
    // fetch products
   const {data: products} = await useFetch('https://fakestoreapi.com/products');
   useHead({
       title: 'Nuxt Store | l33t Merch',
       meta: [{
        name: 'description', content: 'nuxt 3 store'
       }]
   })
</script>

<style  scoped>

</style>