<template>
    <CustomNavbar />

    <router-view />
</template>

<script>

import CustomNavbar from './components/CustomNavbar.vue'

export default {
    name: 'App',
    components: {
        CustomNavbar
    }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
}
</style>
