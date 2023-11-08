<template>

This is index
{{ count }} &nbsp;
<button @click=handleAdd(one) class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">add {{ one }}</button> &nbsp;
<button @click=handleAdd(two) class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">add {{ two }}</button>
</template>

<script setup>
const count = ref(0);
const one = 1;
const two =2;
const handleAdd = (amount) =>{
    count.value += amount;
};
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