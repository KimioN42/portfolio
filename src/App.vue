<template>
    <div class="container">
        <CustomNavbar />
        <div class="content">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <footer>This is a footer :)</footer>
    </div>
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
    --dark-mode-card: #333232;
    --dark-mode-footer: black;
    --dark-mode-font: #fff;

    --light-mode-bg: #fff;
    --light-mode-card: #fafafa;
    --light-mode-footer: #1f1f1f;
    --light-mode-font: #1a1a1a;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
}

.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.content {
    flex: 1 0 auto;
}

/* not working for now */
footer {
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: var(--light-mode-footer);
    padding: 20px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--dark-mode-font);
}

/* Animations for the router-views */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease-out;
}

@media (prefers-color-scheme: dark) {
    html {
        background-color: var(--dark-mode-bg);
        color: var(--dark-mode-font);
    }

    footer {
        background-color: var(--dark-mode-footer);
        color: var(--dark-mode-font);
    }
}
</style>
