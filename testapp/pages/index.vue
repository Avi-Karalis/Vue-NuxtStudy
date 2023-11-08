<template>

This is index
{{ count }}
<button @click="single">add1</button>
<button @click="double">add2</button>
</template>

<script setup>
const count = ref(1);
const double = computed(()=> count.value = count.value + 2);
const single = computed(()=> count.value = count.value + 1);
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