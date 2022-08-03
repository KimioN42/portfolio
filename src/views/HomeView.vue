<template>
    <div class="home-container">
        <MyCard />
        <br><br>
        <h1>Some of my Projects</h1>
        <br><br>
        <ProjectsCard />
    </div>
</template>

<script>

import MyCard from '../components/MyCard.vue'
import ProjectsCard from '../components/ProjectsCard.vue'

export default {
    name: 'HomeView',
    components: {
        MyCard,
        ProjectsCard
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
    /* border: 1px solid green; */
    width: 90%;
}

@media (min-width: 768px) {
    .home-container {
        width: 70%;
    }
}
</style>
