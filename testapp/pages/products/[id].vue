<template>
    <div>
        /products/:id
        <h2>Product details for {{ id }}</h2>
    </div>
</template>

<script setup>
const {id} = useRoute().params ;
definePageMeta({
    layout: 'products'
});
</script>

<style scoped>

</style>