<template>
    <div>
        <h2>About us</h2>
        <p>Koukouroukou</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maiores nobis adipisci incidunt minus aliquam magnam tempora! Amet, quaerat repellat?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('api/currency/GBP');
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>