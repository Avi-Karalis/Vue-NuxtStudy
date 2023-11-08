<template>
    <div>
        /products/:id
        <h2>Product details for {{ id }}</h2>
        <p>{{ product.title }}</p>
        <p>{{ product.price }} €</p>
        <p>{{ product.id }}</p>
        <p>{{ product.description }}</p>
    </div>
</template>

<script setup>
const {id} = useRoute().params ;
const uri = 'https://fakestoreapi.com/products/' + id;
// fetch product
const {data: product} = await useFetch(uri, {key: id});
definePageMeta({
    layout: 'products'
});
</script>

<style scoped>

</style>