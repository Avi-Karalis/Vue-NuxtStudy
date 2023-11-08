<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/">Main</NuxtLink>
            </nav>
        </header>
        
        <div>
            <slot />
        </div>

        <footer>
            <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>