<template>
    <div class="app">
        <NavbarComponent />
        <p>Hello</p>
    </div>
    <router-view />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
    name: 'App',
    components: {
        NavbarComponent
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
}

.app {
    min-height: 100vh;
    position: relative;
    background-color: #f1f1f1;
    border: 1px solid red;
}
</style>
