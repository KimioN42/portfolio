<template>
    <div class="contact-container">
        <h1>Contact me!</h1>
        <br><br>
        <div class="contact-form">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="message" v-model="message" rows="3"
                        placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" class="btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    setup () { }
}
</script>
<style scoped>
.contact-container {
    text-align: center;
    border-radius: 1em;
    box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
    border: 1px solid rgb(45, 45, 45);
    width: auto;
    padding: 3em;
    margin: 1em 0em;
}

.contact-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}

.form-group {
    padding: 0.5em;
}

input,
textarea {
    width: 50%;
    height: auto;
    padding: 1em;
    background-color: var(--light-mode-bg);
    color: var(--light-mode-font);
    border: 1px solid rgb(45, 45, 45);
    border-radius: 1em;
}

button {
    width: 20%;
    height: auto;
    padding: 1em;
    background-color: black;
    color: white;
    border: 1px solid rgb(45, 45, 45);
    border-radius: 1em;
}

@media(max-width: 768px) {
    .contact-container {
        padding: 1em;
    }

    input,
    textarea {
        width: 100%;
    }

    button {
        width: 50%;
    }
}

@media(prefers-color-scheme: dark) {

    input,
    textarea {
        background-color: var(--dark-mode-bg);
        color: var(--dark-mode-font);
    }
}
</style>
