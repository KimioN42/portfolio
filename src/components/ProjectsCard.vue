<template>
    <div class="card-array" v-for="(project, index) in projects.ProjectsArray" v-bind:key="project">
        <div class="card">
            <h1>{{ projects.ProjectsArray[index].name }}</h1>
            <img :src="projects.ProjectsArray[index].image" alt="{{projects.ProjectsArray[index].alt}}"
                class="card-image">
            <div class="card-text">
                <p>{{ projects.ProjectsArray[index].description }}</p>
            </div>
            <div class="links">
                <a :href="projects.ProjectsArray[index].githubLink" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a :href="projects.ProjectsArray[index].liveLink" target="_blank">
                    <i class="fa fa-link"></i>
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import jsonData from '../assets/projects.json'

export default {
    name: 'ProjectsCard',
    data () {
        return {
            projects: jsonData
        }
    }
}
</script>

<style scoped>
.card-array {
    /* border: 1px solid blue; */

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.card {
    /* border: 1px solid red; */

    text-align: center;
    border-radius: 1em;
    box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
    border: 1px solid rgb(45, 45, 45);
    width: auto;
    padding: 3em;
    margin: 1em 0em;
}

.card h1 {
    text-align: left;
    padding: 0.5em;
}

.card-image {
    width: 100%;
    height: 100%;
    padding: 1em;
}

.card-text {
    padding: 1em;
    /* border: 1px solid white; */
}

.links a {
    font-size: 1.8em;
    color: var(--light-mode-font);
    margin: 0.5em;
    /* border: 1px solid blue; */
}

@media (prefers-color-scheme: dark) {
    .links a {
        color: var(--dark-mode-font);
    }

    .links a:visited {
        color: var(--dark-mode-font);
    }
}

@media (max-width: 768px) {
    .card {
        padding: 0.5rem;
    }
}
</style>
