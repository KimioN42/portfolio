<template>
    <div class="home-container">
        <MyCard />
        <br>
        <br>
        <MyCard />
    </div>
</template>

<script>

import MyCard from '../components/MyCard.vue'

export default {
    name: 'HomeView',
    components: {
        MyCard
    }
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    text-align: center;
    padding: 6em 0em;
    /* border: 1px solid red; */
    width: 90%;
}

@media (min-width: 768px) {
    .home-container {
        width: 70%;
    }
}
</style>
