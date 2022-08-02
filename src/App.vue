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

/* setting up variables for darkmode */
:root {
    --dark-mode-bg: #1a1a1a;
    --dark-mode-font: #fff;
    --light-mode-bg: #fff;
    --light-mode-font: #1a1a1a;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
}

@media (prefers-color-scheme: dark) {
    html {
        background-color: var(--dark-mode-bg);
        color: var(--dark-mode-font);
    }
}
</style>
